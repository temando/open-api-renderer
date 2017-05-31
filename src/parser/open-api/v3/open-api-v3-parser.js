import refParser from 'json-schema-ref-parser'
import getUIReadySchema from '../schemaParser'
import { sortByAlphabet, httpMethodSort } from '../../sorting'

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
function getUINavigationAndServices (tags, paths, pathSortFunction = sortByAlphabet, methodSortFunction = httpMethodSort) {
  const navigation = []
  const services = []

  tags.forEach((tag) => {
    const navigationMethods = []
    const servicesMethods = []

    const pathIds = Object.keys(paths).sort(pathSortFunction)

    pathIds.forEach(pathId => {
      const path = paths[pathId]
      const methodTypes = Object.keys(path).sort(methodSortFunction)

      methodTypes.forEach(methodType => {
        const method = path[methodType]
        const methodTags = method.tags

        if (methodTags.includes(tag)) {
          const link = pathId + '/' + methodType
          const navigationMethod = {
            type: methodType,
            title: method.summary,
            link
          }
          navigationMethods.push(navigationMethod)

          const uiRequest = getUIRequest(method.description, method.requestBody)
          const uiResponses = getUIResponses(method.responses)
          const servicesMethod = {
            type: methodType,
            link,
            summary: method.summary,
            request: uiRequest,
            responses: uiResponses
          }

          if (method.description) {
            servicesMethod.description = method.description
          }

          const uiParameters = getUIParameters(method.parameters)
          if (uiParameters) {
            servicesMethod.parameters = uiParameters
          }

          servicesMethods.push(servicesMethod)
        }
      })
    })

    navigation.push({
      title: tag,
      methods: navigationMethods
    })

    services.push({
      title: tag,
      methods: servicesMethods
    })
  })

  return { navigation, services }
}

/**
 * Add media type info, e.g. schema and examples to UI object
 * This method modifies the uiObject input
 *
 * @param {Object} uiObj
 * @param {Object} mediaType Open API mediaType object
 */
function addMediaTypeInfoToUIObject (uiObj, mediaType) {
  if (mediaType.schema) {
    uiObj.schema = getUIReadySchema(mediaType.schema)
  }

  if (mediaType.example) {
    uiObj.example = mediaType.example
  }

  if (mediaType.examples) {
    uiObj.examples = mediaType.examples
  }
}

/**
 * Construct parameters object ready to be consumed by the UI
 *
 * @param {Array} parameters
 *
 * @return {Object}
 */
function getUIParameters (parameters) {
  if (parameters) {
    const uiParameters = {}

    const pathParameters = getUIParametersForLocation(parameters, 'path')
    if (pathParameters) {
      uiParameters.path = pathParameters
    }

    const queryParameters = getUIParametersForLocation(parameters, 'query')
    if (queryParameters) {
      uiParameters.query = queryParameters
    }

    return uiParameters
  }

  return null
}

/**
 * Construct a parameters array for a location, ready to be consumed by the UI
 *
 * @param {Array} parameters
 * @param {String} location. Possible values: query, path, header, cookie
 *
 * @return {Array}
 */
function getUIParametersForLocation (parameters, location) {
  if (!parameters) {
    return null
  }

  const resultArray = parameters.map(parameter => {
    if (parameter.in === location) {
      try {
        const uiParameter = {
          name: parameter.name,
          description: parameter.description,
          required: parameter.required
        }

        // TODO: We set the type to be an array because the Property component
        // handles this. Property should eventually be split and this won't be
        // necessary...
        if (parameter.type) {
          uiParameter.type = [ parameter.type ]
        } else if (parameter.schema && parameter.schema.type) {
          uiParameter.type = [ parameter.schema.type ]
        }

        if (parameter.schema && parameter.schema.default !== undefined) {
          uiParameter.defaultValue = parameter.schema.default
        }

        return uiParameter
      } catch (error) {
        console.log(error)
        console.log('Context', { parameters, parameter, location })
      }
    }

    return null
  }).filter(parameter => parameter)

  if (resultArray && resultArray.length > 0) {
    return resultArray
  } else {
    return null
  }
}

/**
 * Construct request object ready to be consumed by the UI
 *
 * @param {String} description
 * @param {Object} requestBody
 *
 * @return {Object}
 */
function getUIRequest (description, requestBody = null) {
  const uiRequest = {}

  if (description) {
    uiRequest.description = description
  }

  if (requestBody) {
    const mediaType = getMediaType(requestBody.content)

    if (mediaType) {
      addMediaTypeInfoToUIObject(uiRequest, mediaType)
    }
  }

  return uiRequest
}

/**
 * Construct responses object ready to be consumed by the UI
 *
 * @param {Object} responses
 *
 * @return {Array}
 */
function getUIResponses (responses) {
  const uiResponses = []

  for (const statusCode in responses) {
    if (responses.hasOwnProperty(statusCode)) {
      const response = responses[statusCode]

      const uiResponse = {
        code: statusCode,
        description: response.description
      }

      const mediaType = getMediaType(response.content)

      if (mediaType) {
        addMediaTypeInfoToUIObject(uiResponse, mediaType)
      }

      uiResponses.push(uiResponse)
    }
  }

  return uiResponses
}

/**
 * Extracts the content for UI from the first available media type
 *
 * @param {Object} content Open API v3 Content Object
 *
 * @return
 */
function getMediaType (content) {
  if (!content) {
    return null
  }

  const mediaTypeIds = Object.keys(content)

  for (const mediaTypeId of mediaTypeIds) {
    const mediaType = content[mediaTypeId]

    if (mediaType.schema) {
      return mediaType
    }
  }

  return null
}

/**
 * Extract unique tags from paths object
 *
 * @param {Object} paths
 *
 * @return {Array} of strings
 */
function getTags (paths) {
  const tagCollection = []

  for (const pathKey in paths) {
    if (paths.hasOwnProperty(pathKey)) {
      const path = paths[pathKey]

      for (const methodKey in path) {
        if (path.hasOwnProperty(methodKey)) {
          const method = path[methodKey]
          const tags = method.tags

          tags.forEach(tag => {
            if (!tagCollection.includes(tag)) {
              tagCollection.push(tag)
            }
          })
        }
      }
    }
  }

  return tagCollection.sort()
}

/**
 * Converts openApiV3 object to new object ready to be consumed by the UI
 *
 * @param {Object} openApiV3
 *
 * @return {Object}
 */
export default async function getUIReadyDefinition (openApiV3) {
  let derefOpenApiV3
  try {
    derefOpenApiV3 = await refParser.dereference(openApiV3)
  } catch (error) {
    throw new Error(`Unable to dereference input definition. Details: ${JSON.stringify(error)}`)
  }

  const info = derefOpenApiV3.info
  const paths = derefOpenApiV3.paths

  // Get tags
  const tags = getTags(paths)

  // Construction navigation and services
  const { navigation, services } = getUINavigationAndServices(tags, paths)

  const definition = {
    title: info.title,
    version: info.version,
    description: info.description,
    navigation: navigation,
    services: services
  }

  return definition
}
