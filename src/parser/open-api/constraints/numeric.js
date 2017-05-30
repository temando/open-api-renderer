/**
 * Returns an array of hints that relate to the constraints for numeric
 * types, `exclusiveMinimum`, `exclusiveMaximum`, `maximum`, `minimum` and
 * `multipleOf`.
 *
 * @param {object} constraints
 * @return {array}
 */
export function getConstraintHints(constraints) {
  if (!constraints) {
    return [];
  }

  const { exclusiveMinimum, exclusiveMaximum, maximum, minimum, multipleOf } = constraints;
  const validations = [];

  if (multipleOf) {
    validations.push(`multiple of ${multipleOf}`);
  }

  // We're following JSON-Schema Draft 6, which states that exclusive* are
  // integers, not boolean values. Also using `undefined` to prevent edge
  // cases where the value is 0 or 1.
  if (maximum !== undefined && minimum !== undefined) {
    validations.push(`${minimum}…${maximum}`);
  } else if (exclusiveMaximum !== undefined && exclusiveMinimum !== undefined) {
    validations.push(`${exclusiveMinimum}…${exclusiveMaximum}`);
  } else if (minimum !== undefined) {
    validations.push(`≥ ${minimum}`);
  } else if (maximum !== undefined) {
    validations.push(`≤ ${maximum}`);
  } else if (exclusiveMinimum !== undefined) {
    validations.push(`> ${exclusiveMinimum}`);
  } else if (exclusiveMaximum !== undefined) {
    validations.push(`< ${exclusiveMaximum}`);
  }

  return validations;
}
