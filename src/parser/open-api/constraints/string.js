/**
 * Returns an array of hints that relate to the constraints for a string,
 * `pattern`, `minLength`, `maxLength`.
 *
 * @param {object} constraints
 * @return {array}
 */
export function getConstraintHints (constraints) {
  if (!constraints) {
    return []
  }

  const { pattern, minLength, maxLength } = constraints
  const validations = []

  if (pattern) {
    validations.push(`/${pattern}/`)
  }

  if (maxLength !== undefined && minLength !== undefined) {
    // Be succinct if the minLength is the same maxLength
    // ie. value can only be of `x` length.
    if (maxLength === minLength) {
      validations.push(`${minLength} chars`)
    } else {
      validations.push(`${minLength}-${maxLength} chars`)
    }
  } else if (minLength !== undefined) {
    validations.push(`at least ${minLength} chars`)
  } else if (maxLength !== undefined) {
    validations.push(`at most ${maxLength} chars`)
  }

  return validations
}
