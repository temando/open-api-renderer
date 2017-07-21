/**
 * Resolve all circular references in schema.
 * This function does a tree walk, starting at the root element. For each tree node, it creates wrapper node that
 * keeps track of the current node. This is so that it does not have to add new properties (e.g. `parent`) to every
 * traversed node.
 *
 * node has the following structure:
 * {
 *    key,    // The name of the schema node, so we can refer to it
 *    value,  // The actual schema node
 *    parent  // The parent wrapper node
 * }
 *
 * A circular reference occurs when a node references any of its ancestors. When this happens, the link is cut, and
 * the node has a new property to indicate that it has a circular reference.
 *
 * Note that this function also modifies the original schema.
 *
 * @param {Object} schema
 *
 * @return {Object} modified schema
 */
export function resolveCircularRef (schema) {
  const node = {
    key: 'root',
    value: schema,
    parent: null
  }

  visit(node)

  return schema
}

function visit (node) {
  const nodeValue = node.value

  if (typeof nodeValue !== 'object') {
    // Leaf node
    return
  }

  const circularReference = checkCircularReference(node.parent, nodeValue)

  if (circularReference) {
    // Replace circular reference with info about the circular reference
    node.parent.value[node.key] = {
      type: 'object',
      circularReference
    }
  } else {
    // Go through all children in nodes
    const keys = Object.keys(nodeValue)

    keys.forEach(key => {
      const childNode = {
        key,
        value: nodeValue[key],
        parent: node
      }

      visit(childNode)
    })
  }
}

/**
 * Check whether any ancestor node from `node` all the way up to top has `value`
 *
 * node has the following structure:
 * {
 *    key,
 *    value,
 *    parent
 * }
 *
 * This function goes through each node recursively to the top of the tree, and if `node.value === value`
 * then return the reference string for that node. If not found, then return null,
 *
 * @param {Object} node
 * @param {Object} value
 *
 * @return {String}
 */
function checkCircularReference (node, value) {
  if (!node) {
    return null
  }

  if (node.value === value) {
    return getReference(node)
  } else {
    return checkCircularReference(node.parent, value)
  }
}

/**
 * Get reference to a node in the tree, by concatenating all the keys from top all the way down to that node
 * 
 * node has the following structure:
 * {
 *    key,
 *    value,
 *    parent
 * }
 *
 * @param {Object} node
 *
 * @return {String}
 */
function getReference (node) {
  if (!node) {
    return ''
  }

  return getReference(node.parent) + '/' + node.key
}
