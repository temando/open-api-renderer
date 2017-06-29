import { resolveAllOf } from './allOfResolver'
import { resolveOneOf } from './oneOfResolver'
import { hasConstraints, getConstraints } from './constraints/constraintsParser'

const literalTypes = [ 'string', 'integer', 'number', 'boolean' ]

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
    nodeType = [ nodeType ]
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
    const propertiesNode = getPropertiesNode(propertyNode.properties, propertyNode.required)

    if (propertiesNode !== undefined && propertiesNode.length > 0) {
      outputNode.properties = propertiesNode
    }

    return outputNode
    // Is there an array?
  } else if (nodeType.length === 1 && nodeType.includes('array')) {
    if (propertyNode.items) {
      const arrayItemType = propertyNode.items.type

      if (arrayItemType === 'object') {
        const propertiesNode = getPropertiesNode(propertyNode.items.properties, propertyNode.items.required)

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
 *
 * @return {Object}
 */
function getPropertiesNode (propertiesNode, requiredProperties = []) {
  if (!propertiesNode) {
    return []
  }

  return Object.keys(propertiesNode)
    .map(
      (key) => getPropertyNode(key, propertiesNode[key], requiredProperties.includes(key))
    )
    .filter(Boolean)
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
          return [ getPropertyNode('', state) ]
        } else {
          return getPropertiesNode(state.properties, state.required)
        }
      }
    )
  }

  if (resolved.type === 'array') {
    return [ getPropertyNode('', resolved) ]
  } else {
    return getPropertiesNode(resolved.properties, resolved.required)
  }
}
