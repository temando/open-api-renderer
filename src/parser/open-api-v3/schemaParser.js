import Immutable from 'immutable';

/**
 * Converts json schema object to new object ready to be consumed by React components
 *
 * @param {Object} jsonSchema
 *
 * @return {Immutable.Map}
 */
export default function getUIReadySchema(jsonSchema) {
  const schema = getPropertiesNode(jsonSchema.properties, jsonSchema.required);

  return new Immutable.Map(schema);
}

/**
 * Construct UI ready properties object from given inputs.
 *
 * @param {Object} propertiesNode
 * @param {Array} requiredProperties
 *
 * @return {Immutable.Map}
 */
function getPropertiesNode(propertiesNode, requiredProperties = []) {
  const outputNode = {};

  for (const key in propertiesNode) {
    const property = propertiesNode[key];
    const value = getPropertyNode(key, property, requiredProperties.includes(key));

    if (value) {
      outputNode[key] = value;
    }
  }

  return new Immutable.Map(outputNode);
}

/**
 * Construct UI ready property object from given inputs
 *
 * @param {String} nodeName
 * @param {Object} propertyNode
 * @param {Boolean} required
 *
 * @return {Immutable.Map}
 */
function getPropertyNode(nodeName, propertyNode, required = false) {
  const nodeType = propertyNode.type || 'string';

  const outputNode = {
    name: nodeName,
    description: propertyNode.description,
    type: nodeType,
    required,
  };

  // TODO: work out how to handle array in the UI, and update the code here
  if (nodeType === 'string' || nodeType === 'number') {
    return new Immutable.Map(outputNode);
  } else if (nodeType === 'object') {
    const propertiesNode = getPropertiesNode(propertyNode.properties, propertyNode.required);

    if (!propertiesNode.isEmpty()) {
      outputNode.properties = propertiesNode;
    }

    return new Immutable.Map(outputNode);
  }
}
