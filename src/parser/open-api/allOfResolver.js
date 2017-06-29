import { clone } from '../../lib/clone'

/**
 * Resolve node with allOf
 *
 * @param {Object} node
 *
 * @return {Object}
 */
function resolveAllOfItem (node) {
  const output = clone(node)

  for (let i = 0, nodeAllOfLength = node.allOf.length; i < nodeAllOfLength; i++) {
    const item = node.allOf[i]

    Object.keys(item).forEach(key => {
      if (!output.hasOwnProperty(key)) {
        output[key] = item[key]
      } else if (key === 'properties') {
        output.properties = Object.assign(output.properties, item[key])
      } else if (key === 'required') {
        output.required = output.required.concat(item[key])
      }
    })
  }

  // Filter out duplicates.
  if (output.required) {
    output.required = Array.from(new Set([...output.required]))
  }

  delete output.allOf
  return output
}

/**
 * Internal method to resolve allOf for schema object
 *
 * @param {Object} obj
 */
function resolveAllOfRecursive (obj) {
  Object.keys(obj).forEach(key => {
    const item = obj[key]

    if (typeof item === 'object') {
      resolveAllOfRecursive(item)
    }

    if (item.allOf && Array.isArray(item.allOf)) {
      obj[key] = resolveAllOfItem(item)
    }
  })
}

/**
 * Resolve allOf for schema object
 *
 * @param {Object} obj
 *
 * @return {Object} definitions object that has allOf resolved
 */
export function resolveAllOf (obj) {
  resolveAllOfRecursive(obj)

  return obj
}
