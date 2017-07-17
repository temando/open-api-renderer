import { resolveAllOf } from './allOfResolver'
import { resolveOneOf } from './oneOfResolver'
import { hasConstraints, getConstraints } from './constraints/constraintsParser'

const literalTypes = ['string', 'integer', 'number', 'boolean']
const checkedNodes = new Map()

/**
 * Construct a UI ready property object from additionalProperties
 *
 * @param {Object} additionalProperties
 *
 * @return {Object}
 */
function getUIPropertyForAdditionalProperties (additionalProperties) {
  const property = getUIProperty('additionalProperties', additionalProperties)

  // Also add some meta data to it, so the UI can handle this property differently if required
  property.attributes = {}
  property.attributes.isAdditionalProperties = true

  return property
}

/**
 * Construct UI ready property object from given inputs.
 *
 * @param {String} name
 * @param {Object} property
 * @param {Boolean} required
 *
 * @return {Object}
 */
function getUIProperty (name, property, required = false) {
  let nodeTypes = property.type || 'string'

  if (!Array.isArray(nodeTypes)) {
    nodeTypes = [nodeTypes]
  }

  const uiProperty = {
    name,
    type: nodeTypes,
    required
  }

  if (property.title) {
    uiProperty.title = property.title
  }

  if (property.description) {
    uiProperty.description = property.description
  }

  if (property.default) {
    uiProperty.defaultValue = property.default
  }

  if (property.externalDocs) {
    uiProperty.docs = property.externalDocs
  }

  if (property.additionalProperties === false) {
    uiProperty.additionalProperties = false
  }

  if (hasConstraints(property)) {
    uiProperty.constraints = getConstraints(property)
  }

  // Are all the possible types for this property literals?
  // TODO: Currently do not handle multiple types that are not all literals
  if (nodeTypes.every((type) => literalTypes.includes(type))) {
    if (property.enum) {
      uiProperty.enum = property.enum
    }

    return uiProperty
    // Otherwise, let's see if there's an object in there..
  } else if (nodeTypes.length === 1 && nodeTypes.includes('object')) {
    if (checkedNodes.has(property)) {
      return getUIProperty(name, {})
    } else {
      checkedNodes.set(property, true)
      const uiProperties = getUIProperties(property.properties, property.required, property.additionalProperties)

      if (uiProperties !== undefined && uiProperties.length > 0) {
        uiProperty.properties = uiProperties
      }

      return uiProperty
    }
    // Is there an array?
  } else if (nodeTypes.length === 1 && nodeTypes.includes('array')) {
    if (property.items) {
      const arrayItemType = property.items.type

      if (arrayItemType === 'object') {
        const subProperty = property.items

        if (checkedNodes.has(subProperty)) {
          uiProperty.properties = [
            getUIProperty('ERROR - circular reference', {})
          ]
        } else {
          checkedNodes.set(subProperty, true)
          const uiProperties = getUIProperties(subProperty.properties, subProperty.required, subProperty.additionalProperties)

          if (uiProperties !== undefined && uiProperties.length > 0) {
            uiProperty.properties = uiProperties
          }
        }
      } else {
        uiProperty.subtype = arrayItemType
      }
    }

    return uiProperty
  }

  return null
}

/**
 * Construct UI ready properties object from given inputs.
 *
 * @param {Object} properties
 * @param {Array} requiredProperties
 * @param {Object} additionalProperties
 *
 * @return {Array}
 */
function getUIProperties (properties, requiredProperties = [], additionalProperties) {
  if (!properties && !additionalProperties) {
    return []
  }

  let resultArray = []

  if (properties) {
    resultArray = Object.keys(properties)
      .map(key => getUIProperty(key, properties[key], requiredProperties.includes(key)))
      .filter(Boolean)
  }

  if (additionalProperties) {
    resultArray.push(getUIPropertyForAdditionalProperties(additionalProperties))
  }

  return resultArray
}

/**
 * Converts json schema object to new object ready to be consumed by React components
 *
 * @param {Object} jsonSchema resolved json schema
 *
 * @return {Object}
 */
function doGetUIReadySchema (jsonSchema) {
  checkedNodes.clear()

  if (jsonSchema.type === 'array') {
    return [getUIProperty('', jsonSchema)]
  } else {
    return getUIProperties(jsonSchema.properties, jsonSchema.required, jsonSchema.additionalProperties)
  }
}

/**
 * Converts json schema object to new object ready to be consumed by React components
 *
 * @param {Object} jsonSchema raw json schema
 *
 * @return {Object}
 */
export default function getUIReadySchema (jsonSchema) {
  let resolved = resolveAllOf(jsonSchema)
  resolved = resolveOneOf(resolved)

  if (Array.isArray(resolved.oneOf)) {
    return resolved.oneOf.map(
      (state) => doGetUIReadySchema(state)
    )
  }

  return doGetUIReadySchema(resolved)
}
