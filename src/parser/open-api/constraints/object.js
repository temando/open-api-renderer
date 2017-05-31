/**
 * Returns an array of hints that relate to the constraints for an object,
 * `maxProperties`, `minProperties`.
 *
 * @param {object} constraints
 * @return {array}
 */
export function getConstraintHints (constraints) {
  if (!constraints) {
    return []
  }

  const { minProperties, maxProperties } = constraints
  const validations = []

  if (maxProperties !== undefined && minProperties !== undefined) {
    // Be succint if the minProperties is the same maxProperties
    // ie. value can only be of `x` length.
    if (maxProperties === minProperties) {
      validations.push(`${minProperties} properties`)
    } else {
      validations.push(`${minProperties}-${maxProperties} properties`)
    }
  } else if (minProperties !== undefined) {
    validations.push(`at least ${minProperties} properties`)
  } else if (maxProperties !== undefined) {
    validations.push(`at most ${maxProperties} properties`)
  }

  return validations
}
