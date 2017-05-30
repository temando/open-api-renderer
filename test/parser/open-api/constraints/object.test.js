import { getConstraintHints } from '../../../../src/parser/open-api/constraints/object';

describe('object constraints', () => {
  it('handles non-applicable constraints', () => {
    const hints = getConstraintHints({maxLength: 1});

    expect(hints).toHaveLength(0);
  });

  it('handles minProperties', () => {
    const hints = getConstraintHints({minProperties: 2});

    expect(hints).toHaveLength(1);
    expect(hints).toContain('at least 2 properties');
  });

  it('handles maxProperties', () => {
    const hints = getConstraintHints({maxProperties: 10});

    expect(hints).toHaveLength(1);
    expect(hints).toContain('at most 10 properties');
  });

  it('handles minProperties and maxProperties', () => {
    const hints = getConstraintHints({minProperties: 4, maxProperties: 10});

    expect(hints).toHaveLength(1);
    expect(hints).toContain('4-10 properties');
  });

  it('handles minProperties and maxProperties when they are the same value', () => {
    const hints = getConstraintHints({minProperties: 4, maxProperties: 4});

    expect(hints).toHaveLength(1);
    expect(hints).toContain('4 properties');
  });
});
