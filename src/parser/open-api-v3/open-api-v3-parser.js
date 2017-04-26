import Immutable from 'immutable';
import refParser from 'json-schema-ref-parser';
import getUIReadySchema from './schemaParser';

/**
 * Converts openApiV3 object to new object ready to be consumed by the UI
 *
 * @param {Object} openApiV3
 *
 * @return {Object}
 */
export default async function getUIReadyDefinition(openApiV3) {
  let derefOpenApiV3;
  try {
    derefOpenApiV3 = await refParser.dereference(openApiV3);
  } catch (error) {
    throw new Error(`Unable to dereference input definition. Details: ${JSON.stringify(error)}`);
  }

  const info = derefOpenApiV3.info;
  const paths = derefOpenApiV3.paths;

  // Get tags
  const tags = getTags(paths);

  // Construction navigation and services
  const { navigation, services } = getUINavigationAndServices(tags, paths);

  const definition = new Immutable.Map({
    title: info.title,
    version: info.version,
    description: info.description,
    navigation: new Immutable.OrderedMap(navigation),
    services: new Immutable.OrderedMap(services),
  });

  return definition;
}

/**
 * Construct navigation and services ready to be consumed by the UI
 *
 * @param {Array} tags
 * @param {Object} paths
 *
 * @return {{navigation: {}, services: {}}}
 */
function getUINavigationAndServices(tags, paths) {
  const navigation = {};
  const services = {};

  tags.forEach((tag) => {
    const navigationMethods = {};
    const servicesMethods = {};

    for (const pathKey in paths) {
      const path = paths[pathKey];

      for (const methodName in path) {
        const method = path[methodName];
        const methodTags = method.tags;

        if (methodTags.includes(tag)) {
          const link = pathKey + '/' + methodName;
          const navigationMethod = {
            title: method.summary,
            link,
          };
          navigationMethods[link] = new Immutable.OrderedMap(navigationMethod);

          const uiRequest = getUIRequest(method.description, method.requestBody);
          const uiResponses = getUIResponses(method.responses);
          const servicesMethod = {
            type: methodName,
            link,
            summary: method.summary,
            description: method.description,
            request: new Immutable.Map(uiRequest),
            responses: new Immutable.Map(uiResponses),
          };
          servicesMethods[link] = new Immutable.OrderedMap(servicesMethod);
        }
      }
    }

    navigation[tag] = new Immutable.Map({
      title: tag,
      methods: new Immutable.Map(navigationMethods),
    });

    services[tag] = new Immutable.Map({
      title: tag,
      methods: new Immutable.Map(servicesMethods),
    });
  });

  return { navigation, services };
}

/**
 * Construct request object ready to be consumed by the UI
 *
 * @param {String} description
 * @param {Object} requestBody
 *
 * @return {Object}
 */
function getUIRequest(description, requestBody = null) {
  const uiRequest = {
    description,
  };

  if (requestBody) {
    // TODO: tidy this up
    const requestContent = requestBody.content['application/vnd.api+json'] || requestBody.content['application/json'];

    uiRequest.schema = getUIReadySchema(requestContent.schema);
    uiRequest.example = requestContent.examples;
  }

  return uiRequest;
}

/**
 * Construct responses object ready to be consumed by the UI
 *
 * @param {Object} responses
 *
 * @return {Object}
 */
function getUIResponses(responses) {
  const uiResponses = {};

  for (const statusCode in responses) {
    const response = responses[statusCode];

    const uiResponse = {
      code: statusCode,
      description: response.description,
    };

    if (response.content) {
      // TODO: tidy this up
      const responseContent = response.content['application/vnd.api+json'] || response.content['application/json'];
      uiResponse.schema = getUIReadySchema(responseContent.schema);
    }

    uiResponses[statusCode] = uiResponse;
  }

  return uiResponses;
}

/**
 * Extract unique tags from paths object
 *
 * @param {Object} paths
 *
 * @return {Array} of strings
 */
function getTags(paths) {
  const tagCollection = [];

  for (const pathKey in paths) {
    const path = paths[pathKey];

    for (const methodKey in path) {
      const method = path[methodKey];
      const tags = method.tags;

      tags.forEach(tag => {
        if (!tagCollection.includes(tag)) {
          tagCollection.push(tag);
        }
      });
    }
  }

  return tagCollection.sort();
}
