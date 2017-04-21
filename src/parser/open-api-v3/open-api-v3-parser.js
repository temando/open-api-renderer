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

  // Construct navigation
  const navigation = getUIReadyNavigation(paths, tags);

  // Construct main contents
  const services = getUIReadyServices(paths, tags);

  const definition = new Immutable.Map({
    title: info.title,
    version: info.version,
    description: info.description,
    navigation,
    services,
  });

  return definition;
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
      const responseContent = response.content['application/vnd.api+json'] || response.content['application/json'];
      uiResponse.schema = getUIReadySchema(responseContent.schema);
    }

    uiResponses[statusCode] = uiResponse;
  }

  return uiResponses;
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
    const requestContent =
      requestBody.content['application/vnd.api+json'] ||
      requestBody.content['application/json'];

    uiRequest.schema = getUIReadySchema(requestContent.schema);
    uiRequest.example = requestContent.examples;
  }

  return uiRequest;
}

/**
 * Construct services Map from paths object
 *
 * @param {Object} paths
 * @param {Array} tags
 *
 * @return {Immutable.Map}
 */
function getUIReadyServices(paths, tags) {
  const services = {};

  tags.forEach((tag) => {
    let uiMethods = {};

    for (const pathKey in paths) {
      const path = paths[pathKey];

      for (const methodName in path) {
        const method = path[methodName];
        const methodTags = method.tags;

        if (methodTags.includes(tag)) {
          const link = pathKey + '/' + methodName;
          const uiRequest = getUIRequest(method.description, method.requestBody);
          const uiResponses = getUIResponses(method.responses);

          const uiMethod = {
            type: methodName,
            link,
            summary: method.summary,
            description: method.description,
            request: new Immutable.Map(uiRequest),
            responses: new Immutable.Map(uiResponses),
          };

          uiMethods[link] = new Immutable.OrderedMap(uiMethod);
        }
      }
    }

    services[tag] = new Immutable.Map({
      title: tag,
      methods: new Immutable.Map(uiMethods),
    });
  });

  return new Immutable.OrderedMap(services);
}

/**
 * Construct navigation Map from paths object
 *
 * @param {Object} paths
 * @param {Array} tags
 *
 * @return {Immutable.Map}
 */
function getUIReadyNavigation(paths, tags) {
  const navigation = {};

  tags.forEach((tag) => {
    let uiMethods = {};

    for (const pathKey in paths) {
      const path = paths[pathKey];

      for (const methodName in path) {
        const method = path[methodName];
        const methodTags = method.tags;

        if (methodTags.includes(tag)) {
          const link = pathKey + '/' + methodName;
          const uiMethod = {
            title: method.summary,
            link,
          };

          uiMethods[link] = new Immutable.OrderedMap(uiMethod);
        }
      }
    }

    navigation[tag] = new Immutable.Map({
      title: tag,
      methods: new Immutable.Map(uiMethods),
    });
  });

  return new Immutable.OrderedMap(navigation);
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
