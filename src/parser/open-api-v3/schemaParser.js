/**
 * Converts json schema object to new object ready to be consumed by React components
 *
 * @param {Object} jsonSchema
 *
 * @return {Object}
 */
export default function getUIReadySchema(jsonSchema) {
  const schema = getPropertiesNode(jsonSchema.properties, jsonSchema.required);

  return schema;
}

/**
 * Construct UI ready properties object from given inputs.
 *
 * @param {Object} propertiesNode
 * @param {Array} requiredProperties
 *
 * @return {Object}
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

  return outputNode;
}

/**
 * Construct UI ready property object from given inputs
 *
 * @param {String} nodeName
 * @param {Object} propertyNode
 * @param {Boolean} required
 *
 * @return {Object}
 */
function getPropertyNode(nodeName, propertyNode, required = false) {
  const nodeType = propertyNode.type || 'string';

  const outputNode = {
    name: nodeName,
    description: propertyNode.description,
    type: nodeType,
    required
  };

  // TODO: work out how to handle array in the UI, and update the code here
  if (nodeType === 'string' || nodeType === 'number') {
    return outputNode;
  } else if (nodeType === 'object') {
    const propertiesNode = getPropertiesNode(propertyNode.properties, propertyNode.required);

    if (!propertiesNode === undefined) {
      outputNode.properties = propertiesNode;
    }

    return outputNode;
  }
}
