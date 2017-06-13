import { getConstraintHints } from '../../../../src/parser/open-api/constraints/array'

describe('array constraints', () => {
  it('handles non-applicable constraints', () => {
    const hints = getConstraintHints({pattern: '^[a-zA-Z0-9_-]+$'})

    expect(hints).toHaveLength(0)
  })

  it('handles uniqueItems', () => {
    const hints = getConstraintHints({uniqueItems: true})

    expect(hints).toHaveLength(1)
    expect(hints).toContain('unique items')
  })

  it('handles minItems', () => {
    const hints = getConstraintHints({minItems: 2})

    expect(hints).toHaveLength(1)
    expect(hints).toContain('at least 2 items')
  })

  it('handles maxItems', () => {
    const hints = getConstraintHints({maxItems: 10})

    expect(hints).toHaveLength(1)
    expect(hints).toContain('at most 10 items')
  })

  it('handles minItems and maxItems', () => {
    const hints = getConstraintHints({minItems: 4, maxItems: 10})

    expect(hints).toHaveLength(1)
    expect(hints).toContain('4-10 items')
  })

  it('handles minItems and maxItems when they are the same value', () => {
    const hints = getConstraintHints({minItems: 4, maxItems: 4})

    expect(hints).toHaveLength(1)
    expect(hints).toContain('4 items')
  })

  it('handles uniqueItems, minItems and maxItems', () => {
    const hints = getConstraintHints({uniqueItems: true, minItems: 4, maxItems: 10})

    expect(hints).toHaveLength(2)
  })
})
