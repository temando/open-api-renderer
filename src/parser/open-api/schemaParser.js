import { resolveAllOf } from './allOfResolver'
import { resolveOneOf } from './oneOfResolver'
import { resolveCircularRef } from './circularRefResolver'
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
  const property = getUIProperty('additionalProperties', additionalProperties)

  // Also add some meta data to it, so the UI can handle this property differently if required
  property.attributes = {}
  property.attributes.isAdditionalProperties = true

  return property
}

/**
 * Construct a UI ready property object for circular reference. This is mainly for debugging purpose.
 *
 * @param {string} name
 *
 * @return {Object}
 */
function getUIPropertyForCircularReference (name) {
  const uiProperty = getBaseUIProperty('CIRCULAR REFERENCE', {})

  uiProperty.description = `Circular reference to **${name}**.`
  uiProperty.attributes = {}
  uiProperty.attributes.isCircularReference = true

  return uiProperty
}

/**
 * Construct base UI ready property object from given inputs.
 *
 * @param {String} name
 * @param {Object} property
 * @param {Boolean} required
 *
 * @return {Object}
 */
function getBaseUIProperty (name, property, required = false) {
  let nodeTypes = property.type || 'string'

  if (!Array.isArray(nodeTypes)) {
    nodeTypes = [nodeTypes]
  }

  const uiProperty = {
    name,
    types: nodeTypes,
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

  return uiProperty
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
  const uiProperty = getBaseUIProperty(name, property, required)
  const types = uiProperty.types

  // Are all the possible types for this property literals?
  // TODO: Currently do not handle multiple types that are not all literals
  if (types.every((type) => literalTypes.includes(type))) {
    if (property.enum) {
      uiProperty.enum = property.enum
    }

    return uiProperty
  } else if (types.length === 1 && types.includes('object')) {
    // Handle object type
    addPropertiesToUIProperty(uiProperty, property)
    return uiProperty
  } else if (types.length === 1 && types.includes('array') && property.items) {
    // Handle array type
    const arrayItemType = property.items.type

    if (arrayItemType === 'object') {
      const subProperty = property.items
      addPropertiesToUIProperty(uiProperty, subProperty)
    } else {
      uiProperty.subtype = arrayItemType
    }

    return uiProperty
  }

  return null
}

function addPropertiesToUIProperty (uiProperty, property) {
  if (property.circularReference) {
    uiProperty.properties = [
      getUIPropertyForCircularReference(property.circularReference)
    ]
  } else {
    const uiProperties = getUIProperties(property.properties, property.required, property.additionalProperties)

    if (uiProperties && uiProperties.length > 0) {
      uiProperty.properties = uiProperties
    }
  }
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
function getUIProperties (propertiesNode, requiredProperties = [], additionalPropertiesNode) {
  if (!propertiesNode && !additionalPropertiesNode) {
    return []
  }

  let resultArray = []

  if (propertiesNode) {
    resultArray = Object.keys(propertiesNode)
      .map(
        (key) => getUIProperty(key, propertiesNode[key], requiredProperties.includes(key))
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
 * @param {Object} jsonSchema resolved json schema
 *
 * @return {Object}
 */
function doGetUIReadySchema (jsonSchema) {
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
  let resolved = resolveCircularRef(jsonSchema)
  resolved = resolveAllOf(resolved)
  resolved = resolveOneOf(resolved)

  if (Array.isArray(resolved.oneOf)) {
    return resolved.oneOf.map(
      (state) => doGetUIReadySchema(state)
    )
  }

  return doGetUIReadySchema(resolved)
}
