// https://github.com/OAI/OpenAPI-Specification/blob/OpenAPI.next/versions/3.0.md#schema-object
const VALIDATION_KEYWORDS = [
  'format',
  'exclusiveMaximum',
  'exclusiveMinimum',
  'maximum',
  'maxItems',
  'maxLength',
  'maxProperties',
  'minimum',
  'minItems',
  'minLength',
  'minProperties',
  'multipleOf',
  'pattern',
  'uniqueItems'
];

/**
 * Determines if the given property contains any validation keywords
 *
 * @param {Object} property
 * @return {Boolean}
 */
export function hasConstraints(property) {
  return Object.keys(property).some(
    (key) => VALIDATION_KEYWORDS.includes(key)
  );
}

export function getConstraints(property) {
  return {

  };
}
