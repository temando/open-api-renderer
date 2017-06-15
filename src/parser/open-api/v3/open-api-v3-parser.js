import refParser from 'json-schema-ref-parser'
import { getSecurity, getUISecurity } from './securityParser'
import getUIReadySchema from '../schemaParser'
import { sortByUIMethod } from '../../sorting'

/**
 * Construct navigation and services ready to be consumed by the UI
 *
 * @param {Array} tags
 * @param {Object} paths
 * @param {Object} globalSecurity
 * @param {Object} securityDefinitions
 * @return {{navigation: [], services: []}}
 */
function getUINavigationAndServices (tags, paths, globalSecurity = [], securityDefinitions) {
  const navigation = []
  const services = []

  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i]
    const navigationMethods = []
    const servicesMethods = []
    const pathIds = Object.keys(paths)

    for (let j = 0; j < pathIds.length; j++) {
      const pathId = pathIds[j]
      const path = paths[pathId]
      const methodTypes = Object.keys(path)

      for (let k = 0; k < methodTypes.length; k++) {
        const methodType = methodTypes[k]
        const method = path[methodType]

        if (!method.tags.includes(tag)) {
          continue
        }

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
          title: method.summary,
          link,
          request: uiRequest,
          responses: uiResponses
        }

        if (method.description) {
          servicesMethod.description = method.description
        }

        // Security can be declared per method, or globally for the entire API.
        if (method.security) {
          servicesMethod.security = getUISecurity(method.security, securityDefinitions)
        } else if (globalSecurity.length) {
          servicesMethod.security = getUISecurity(globalSecurity, securityDefinitions)
        }

        const uiParameters = getUIParameters(method.parameters)
        if (uiParameters) {
          servicesMethod.parameters = uiParameters
        }

        servicesMethods.push(servicesMethod)
      }
    }

    navigation.push({
      title: tag,
      methods: navigationMethods.sort(sortByUIMethod)
    })

    services.push({
      title: tag,
      methods: servicesMethods.sort(sortByUIMethod)
    })
  }

  return {navigation, services}
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
    const schema = getUIReadySchema(mediaType.schema)

    if (schema.length) {
      uiObj.schema = schema
    }
  }

  let examples = []

  if (mediaType.example) {
    examples.push(mediaType.example)
  }

  if (mediaType.examples) {
    examples = examples.concat(...mediaType.examples)
  }

  if (examples.length) {
    uiObj.examples = examples
  }
}

/**
 * Construct parameters object ready to be consumed by the UI
 *
 * @param {Array} parameters
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
 * @return {Array}
 */
function getUIParametersForLocation (parameters, location) {
  if (!parameters) {
    return null
  }

  const resultArray = parameters.filter(parameter => (parameter.in === location)).map(parameter => {
    const uiParameter = {
      name: parameter.name,
      description: parameter.description,
      required: parameter.required
    }

    // TODO: We set the type to be an array because the Property component
    // handles this. Property should eventually be split and this won't be
    // necessary...
    if (parameter.type) {
      uiParameter.type = [parameter.type]
    } else if (parameter.schema && parameter.schema.type) {
      uiParameter.type = [parameter.schema.type]
    }

    if (parameter.schema && parameter.schema.default !== undefined) {
      uiParameter.defaultValue = parameter.schema.default
    }

    return uiParameter
  })

  return resultArray.length ? resultArray : null
}

/**
 * Construct request object ready to be consumed by the UI
 *
 * @param {String} description
 * @param {Object} requestBody
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
 * @return {Array}
 */
function getUIResponses (responses) {
  const uiResponses = []

  for (const statusCode in responses) {
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

  return uiResponses
}

/**
 * Extracts the content for UI from the first available media type
 *
 * @param {Object} content Open API v3 Content Object
 * @return {Object|null}
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
 * @return {Array} of strings
 */
function getTags (paths) {
  const tagCollection = []

  for (const pathKey in paths) {
    const path = paths[pathKey]

    for (const methodKey in path) {
      const method = path[methodKey]

      method.tags.forEach(tag => {
        if (!tagCollection.includes(tag)) {
          tagCollection.push(tag)
        }
      })
    }
  }

  return tagCollection.sort()
}

/**
 * Converts openApiV3 object to new object ready to be consumed by the UI
 *
 * @param {Object} openApiV3
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

  // Get security schemes
  const security = getSecurity(derefOpenApiV3)

  // Construction navigation and services
  const {navigation, services} = getUINavigationAndServices(tags, paths, derefOpenApiV3.security || [], security)

  const definition = {
    title: info.title,
    version: info.version,
    description: info.description,
    navigation,
    services,
    security
  }

  return definition
}
