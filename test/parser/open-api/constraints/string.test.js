import { getConstraintHints } from '../../../../src/parser/open-api/constraints/string'

describe('string constraints', () => {
  it('handles non-applicable constraints', () => {
    const hints = getConstraintHints({minItems: 1})

    expect(hints).toHaveLength(0)
  })

  it('handles pattern', () => {
    const hints = getConstraintHints({pattern: '^[a-zA-Z0-9_-]+$'})

    expect(hints).toHaveLength(1)
    expect(hints).toContain('/^[a-zA-Z0-9_-]+$/')
  })

  it('handles minLength', () => {
    const hints = getConstraintHints({minLength: 2})

    expect(hints).toHaveLength(1)
    expect(hints).toContain('at least 2 chars')
  })

  it('handles maxLength', () => {
    const hints = getConstraintHints({maxLength: 10})

    expect(hints).toHaveLength(1)
    expect(hints).toContain('at most 10 chars')
  })

  it('handles minLength and maxLength', () => {
    const hints = getConstraintHints({minLength: 4, maxLength: 10})

    expect(hints).toHaveLength(1)
    expect(hints).toContain('4-10 chars')
  })

  it('handles minLength and maxLength when they are the same value', () => {
    const hints = getConstraintHints({minLength: 4, maxLength: 4})

    expect(hints).toHaveLength(1)
    expect(hints).toContain('4 chars')
  })

  it('handles pattern, minLength and maxLength', () => {
    const hints = getConstraintHints({pattern: '^[a-z]', minLength: 4, maxLength: 10})

    expect(hints).toHaveLength(2)
  })
})
