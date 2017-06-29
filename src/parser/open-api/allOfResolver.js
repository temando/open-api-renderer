import clone from 'lodash/clone'
import cloneDeep from 'lodash/cloneDeep'
import uniq from 'lodash/uniq'

/**
 * Resolve node with allOf
 *
 * @param {Object} node
 *
 * @return {Object}
 */
function resolveAllOfItem (node) {
  const output = { ...node }
  delete output.allOf

  const allOfItems = node.allOf
  for (let i = 0; i < allOfItems.length; i++) {
    const item = allOfItems[i]

    Object.keys(item).forEach(key => {
      if (!output.hasOwnProperty(key)) {
        output[key] = [ ...item[key] ]
      } else if (key === 'properties') {
        const properties = item[key]

        Object.keys(properties).forEach(name => {
          output.properties[name] = { ...properties[name] }
        })
      } else if (key === 'required') {
        // Concatenate to existing list and remove duplicates
        const requiredArray = uniq(output.required.concat(item[key]))
        output.required = requiredArray.sort()
      }
    })
  }

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

    if (item) {
      if (typeof item === 'object') {
        resolveAllOfRecursive(item)
      }

      if (item.allOf && Array.isArray(item.allOf)) {
        obj[key] = resolveAllOfItem(item)
      }
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
  const clonedObj = clone(obj)
  resolveAllOfRecursive(clonedObj)

  return clonedObj
}
