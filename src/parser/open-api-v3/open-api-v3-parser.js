import refParser from 'json-schema-ref-parser';
import getUIReadySchema from './schemaParser';

/**
 * Sort function
 *
 * @param {String} str1
 * @param {String} str2
 *
 * @return {number}
 */
function sortByAlphabet(str1, str2) {
  if (str1 < str2) {
    return -1;
  } else if (str1 > str2) {
    return 1;
  } else {
    return 0;
  }
}

/**
 * Sort function
 *
 * @param {String} inMethod1
 * @param {String} inMethod2
 *
 * @return {number}
 */

function defaultMethodSort(inMethod1, inMethod2) {
  const methodWeights = {
    GET: 1,
    POST: 2,
    PUT: 3,
    DELETE: 4,
    HEAD: 5,
    OPTIONS: 6,
    TRACE: 7,
    CONNECT: 8
  };

  const method1 = inMethod1.toUpperCase();
  const method2 = inMethod2.toUpperCase();

  if (!methodWeights.hasOwnProperty(method1)) {
    throw new Error(`Invalid method: ${method1}`);
  }

  if (!methodWeights.hasOwnProperty(method2)) {
    throw new Error(`Invalid method: ${method2}`);
  }

  return methodWeights[method1] - methodWeights[method2];
}

/**
 * Construct navigation and services ready to be consumed by the UI
 *
 * @param {Array} tags
 * @param {Object} paths
 * @param {Function} pathSortFunction
 * @param {Function} methodSortFunction
 *
 * @return {{navigation: [], services: []}}
 */
function getUINavigationAndServices(tags, paths, pathSortFunction = sortByAlphabet, methodSortFunction = defaultMethodSort) {
  const navigation = [];
  const services = [];

  tags.forEach((tag) => {
    const navigationMethods = [];
    const servicesMethods = [];

    const pathIds = Object.keys(paths).sort(pathSortFunction);

    pathIds.forEach(pathId => {
      const path = paths[pathId];
      const methodTypes = Object.keys(path).sort(methodSortFunction);

      methodTypes.forEach(methodType => {
        const method = path[methodType];
        const methodTags = method.tags;

        if (methodTags.includes(tag)) {
          const link = pathId + '/' + methodType;
          const navigationMethod = {
            type: methodType,
            title: method.summary,
            link
          };
          navigationMethods.push(navigationMethod);

          const uiRequest = getUIRequest(method.description, method.requestBody);
          const uiResponses = getUIResponses(method.responses);
          const servicesMethod = {
            type: methodType,
            link,
            summary: method.summary,
            request: uiRequest,
            responses: uiResponses
          };

          if (method.description) {
            servicesMethod.description = method.description;
          }

          servicesMethods.push(servicesMethod);
        }
      });
    });

    navigation.push({
      title: tag,
      methods: navigationMethods
    });

    services.push({
      title: tag,
      methods: servicesMethods
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
  const uiRequest = {};

  if (description) {
    uiRequest.description = description;
  }

  if (requestBody) {
    // TODO: tidy this up
    const requestContent = requestBody.content['application/vnd.api+json'] || requestBody.content['application/json'];

    const schema = getUIReadySchema(requestContent.schema);

    if (schema) {
      uiRequest.schema = schema;
    }

    if (requestContent.examples) {
      uiRequest.example = requestContent.examples;
    }
  }

  return uiRequest;
}

/**
 * Construct responses object ready to be consumed by the UI
 *
 * @param {Object} responses
 *
 * @return {Array}
 */
function getUIResponses(responses) {
  const uiResponses = [];

  for (const statusCode in responses) {
    if (responses.hasOwnProperty(statusCode)) {
      const response = responses[statusCode];

      const uiResponse = {
        code: statusCode,
        description: response.description
      };

      if (response.content) {
        // TODO: tidy this up
        const responseContent = response.content['application/vnd.api+json'] || response.content['application/json'];
        uiResponse.schema = getUIReadySchema(responseContent.schema);
      }

      uiResponses.push(uiResponse);
    }
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
    if (paths.hasOwnProperty(pathKey)) {
      const path = paths[pathKey];

      for (const methodKey in path) {
        if (path.hasOwnProperty(methodKey)) {
          const method = path[methodKey];
          const tags = method.tags;

          tags.forEach(tag => {
            if (!tagCollection.includes(tag)) {
              tagCollection.push(tag);
            }
          });
        }
      }
    }
  }

  return tagCollection.sort();
}

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

  const definition = {
    title: info.title,
    version: info.version,
    description: info.description,
    navigation: navigation,
    services: services
  };

  return definition;
}
