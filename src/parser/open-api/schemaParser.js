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
  }

  // Let's see if it's an object we are dealing with..
  if (nodeType.length === 1 && nodeType.includes('object')) {
    return getObjectProperties(outputNode, propertyNode)
  }

  // Finally check that it's an array
  if (nodeType.length === 1 && nodeType.includes('array')) {
    if (propertyNode.items) {
      const arrayItemType = propertyNode.items.type

      // Handle if the items is defined as a simple type, or as an object
      if (arrayItemType === 'object') {
        return getObjectProperties(outputNode, propertyNode.items)
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
 * @param {Object} properties
 * @param {Array} requiredProperties
 * @param {Object} additionalProperties
 * @return {Object[]}
 */
function getPropertiesNode (properties, requiredProperties = [], additionalProperties) {
  let outputNode = []

  if (properties) {
    outputNode = Object.keys(properties)
      .map(
        (key) => getPropertyNode(key, properties[key], requiredProperties.includes(key))
      )
      .filter(Boolean)
  }

  if (additionalProperties) {
    outputNode.push({
      additionalProperties: getPropertyNode('additionalProperties', additionalProperties)
    })
  }

  return outputNode
}

/**
 * Mutates (and returns) the `targetObject` with any applicable `object` related
 * properties.
 *
 * @param {Object} targetObject
 * @param {Object} propertyNode
 * @return {Object}
 */
function getObjectProperties (targetObject, propertyNode) {
  const propertiesNode = getPropertiesNode(propertyNode.properties, propertyNode.required)

  if (propertiesNode.length > 0) {
    targetObject.properties = propertiesNode
  }

  // Handle additionalProperties: RE: #91
  if (propertyNode.hasOwnProperty('additionalProperties')) {
    if (propertyNode.additionalProperties === false) {
      targetObject.additionalProperties = false
    } else {
      targetObject.additionalProperties =
        getPropertyNode('additionalProperties', propertyNode.additionalProperties)
    }
  }

  return targetObject
}

/**
 * Given a resolved object, return all the relevant properties
 *
 * @param {Object} resolvedObj
 * @return {Object[]}
 */
function getProperties (resolvedObj) {
  if (resolvedObj.type !== 'object') {
    return [ getPropertyNode('', resolvedObj) ]
  }

  return getPropertiesNode(resolvedObj.properties, resolvedObj.required, resolvedObj.additionalProperties)
}

/**
 * Converts json schema object to new object ready to be consumed by React components
 *
 * @param {Object} jsonSchema
 * @return {Object[]}
 */
export default function getUIReadySchema (jsonSchema) {
  let resolved = resolveAllOf(jsonSchema)
  resolved = resolveOneOf(resolved)

  // Handle oneOf scenarios.
  if (Array.isArray(resolved.oneOf)) {
    return resolved.oneOf.map(getProperties)
  }

  return getProperties(resolved)
}
