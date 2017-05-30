import { getConstraintHints } from '../../../../src/parser/open-api/constraints/numeric';

describe('numeric constraints', () => {
  it('handles non-applicable constraints', () => {
    const hints = getConstraintHints({pattern: '^[a-zA-Z0-9_-]+$'});

    expect(hints).toHaveLength(0);
  });

  it('handles multipleOf', () => {
    const hints = getConstraintHints({multipleOf: 2});

    expect(hints).toHaveLength(1);
    expect(hints).toContain('multiple of 2');
  });

  it('handles maximum', () => {
    const hints = getConstraintHints({maximum: 2});

    expect(hints).toHaveLength(1);
    expect(hints).toContain('≤ 2');
  });

  it('handles minimum', () => {
    const hints = getConstraintHints({minimum: 2});

    expect(hints).toHaveLength(1);
    expect(hints).toContain('≥ 2');
  });

  it('handles minimum and maximum', () => {
    const hints = getConstraintHints({minimum: 2, maximum: 5});

    expect(hints).toHaveLength(1);
    expect(hints).toContain('2…5');
  });

  it('handles exclusiveMaximum', () => {
    const hints = getConstraintHints({exclusiveMaximum: 2});

    expect(hints).toHaveLength(1);
    expect(hints).toContain('< 2');
  });

  it('handles exclusiveMinimum', () => {
    const hints = getConstraintHints({exclusiveMinimum: 2});

    expect(hints).toHaveLength(1);
    expect(hints).toContain('> 2');
  });

  it('handles exclusiveMinimum and exclusiveMaximum', () => {
    const hints = getConstraintHints({exclusiveMinimum: 2, exclusiveMaximum: 5});

    expect(hints).toHaveLength(1);
    expect(hints).toContain('2…5');
  });

  it('handles a combination of constraints', () => {
    const hints = getConstraintHints({multipleOf: 2, minimum: 2, maximum: 20 });

    expect(hints).toHaveLength(2);
  });
});
