import { VALIDATION_KEYWORDS, hasConstraints, getConstraints } from '../../src/parser/open-api/constraintsParser';

describe('VALIDATION_KEYWORDS', () => {
  test('keywords match what is supported by Open API', () => {
    expect(VALIDATION_KEYWORDS).toEqual([
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
    ]);
  });
});

describe('#hasConstraints', () => {
  test('returns true when the property contains constraints', () => {
    const property = {
      type: 'string',
      pattern: '^[a-zA-Z0-9_-]+$'
    };

    expect(hasConstraints(property)).toBeTruthy();
  });

  test('returns false when the property has no constraints', () => {
    const property = {
      type: 'string'
    };

    expect(hasConstraints(property)).toBeFalsy();
  });
});

describe('#getConstraints', () => {
  test('can create a constraints object with appropriate constraints', () => {
    const property = {
      type: 'string',
      pattern: '^[a-zA-Z0-9_-]+$'
    };

    const constraints = {
      pattern: '^[a-zA-Z0-9_-]+$'
    };

    expect(getConstraints(property)).toEqual(constraints);
  });
});
