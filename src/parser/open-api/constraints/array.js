/**
 * Returns an array of hints that relate to the constraints for an array,
 * `maxItems`, `minItems` and `uniqueItems`.
 *
 * @param {object} constraints
 * @return {array}
 */
export function getConstraintHints (constraints) {
  if (!constraints) {
    return []
  }

  const { maxItems, minItems, uniqueItems } = constraints
  const validations = []

  if (uniqueItems) {
    validations.push('unique items')
  }

  if (maxItems !== undefined && minItems !== undefined) {
    // Be succint if the minItems is the same maxItems
    // ie. value can only be of `x` length.
    if (maxItems === minItems) {
      validations.push(`${minItems} items`)
    } else {
      validations.push(`${minItems}-${maxItems} items`)
    }
  } else if (minItems !== undefined) {
    validations.push(`at least ${minItems} items`)
  } else if (maxItems !== undefined) {
    validations.push(`at most ${maxItems} items`)
  }

  return validations
}
