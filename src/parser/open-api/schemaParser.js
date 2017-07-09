import { resolveAllOf } from './allOfResolver'
import { resolveOneOf } from './oneOfResolver'
import { hasConstraints, getConstraints } from './constraints/constraintsParser'

const literalTypes = ['string', 'integer', 'number', 'boolean']

/**
 * Construct a UI ready property object from additionalProperties
 *
 * @param {Object} additionalProperties
 *
 * @return {Object}
 */
function getAdditionalPropertiesProperty (additionalProperties) {
  const property = getPropertyNode('additionalProperties', additionalProperties)

  // Also add some meta data to it, so the UI can handle this property differently if required
  property.attributes = {}
  property.attributes.isAdditionalProperties = true

  return property
}

/**
 * Construct UI ready property object from given inputs.
 *
 * @param {String} nodeName
 * @param {Object} propertyNode
 * @param {Boolean} required
 *
 * @return {Object}
 */
function getPropertyNode (nodeName, propertyNode, required = false) {
  let nodeType = propertyNode.type || 'string'

  if (!Array.isArray(nodeType)) {
    nodeType = [nodeType]
  }

  const outputNode = {
    name: nodeName,
    type: nodeType,
    required
  }

  if (propertyNode.title) {
    outputNode.title = propertyNode.title
  }

  if (propertyNode.description) {
    outputNode.description = propertyNode.description
  }

  if (propertyNode.default) {
    outputNode.defaultValue = propertyNode.default
  }

  if (propertyNode.additionalProperties === false) {
    outputNode.additionalProperties = false
  }

  if (hasConstraints(propertyNode)) {
    outputNode.constraints = getConstraints(propertyNode)
  }

  // Are all the possible types for this property literals?
  // TODO: Currently do not handle multiple types that are not all literals
  if (nodeType.every((type) => literalTypes.includes(type))) {
    if (propertyNode.enum) {
      outputNode.enum = propertyNode.enum
    }

    return outputNode
    // Otherwise, let's see if there's an object in there..
  } else if (nodeType.length === 1 && nodeType.includes('object')) {
    const propertiesNode = getPropertiesNode(propertyNode.properties, propertyNode.required, propertyNode.additionalProperties)

    if (propertiesNode !== undefined && propertiesNode.length > 0) {
      outputNode.properties = propertiesNode
    }

    return outputNode
    // Is there an array?
  } else if (nodeType.length === 1 && nodeType.includes('array')) {
    if (propertyNode.items) {
      const arrayItemType = propertyNode.items.type

      if (arrayItemType === 'object') {
        const propertiesNode = getPropertiesNode(propertyNode.items.properties, propertyNode.items.required, propertyNode.items.additionalProperties)

        if (propertiesNode !== undefined && propertiesNode.length > 0) {
          outputNode.properties = propertiesNode
        }
      } else {
        outputNode.subtype = arrayItemType
      }
    }

    return outputNode
  }

  return null
}

/**
 * Construct UI ready properties object from given inputs.
 *
 * @param {Object} propertiesNode
 * @param {Array} requiredProperties
 * @param {Object} additionalPropertiesNode
 *
 * @return {Array}
 */
function getPropertiesNode (propertiesNode, requiredProperties = [], additionalPropertiesNode) {
  if (!propertiesNode && !additionalPropertiesNode) {
    return []
  }

  let resultArray = []

  if (propertiesNode) {
    resultArray = Object.keys(propertiesNode)
      .map(
        (key) => getPropertyNode(key, propertiesNode[key], requiredProperties.includes(key))
      )
      .filter(Boolean)
  }

  if (additionalPropertiesNode) {
    resultArray.push(getAdditionalPropertiesProperty(additionalPropertiesNode))
  }

  return resultArray
}

/**
 * Converts json schema object to new object ready to be consumed by React components
 *
 * @param {Object} jsonSchema
 *
 * @return {Object}
 */
export default function getUIReadySchema (jsonSchema) {
  let resolved = resolveAllOf(jsonSchema)
  resolved = resolveOneOf(resolved)

  if (Array.isArray(resolved.oneOf)) {
    return resolved.oneOf.map(
      (state) => {
        if (state.type === 'array') {
          return [getPropertyNode('', state)]
        } else {
          return getPropertiesNode(state.properties, state.required, state.additionalProperties)
        }
      }
    )
  }

  if (resolved.type === 'array') {
    return [getPropertyNode('', resolved)]
  } else {
    return getPropertiesNode(resolved.properties, resolved.required, resolved.additionalProperties)
  }
}
