import { getSortingFunction } from './../../src/lib/sorting'

describe('#getSortingFunction', () => {
  it('can return alpha sort function', () => {
    expect(typeof getSortingFunction('alpha')).toBe('function')
  })

  it('returns no sort function', () => {
    expect(typeof getSortingFunction(false)).not.toBe('function')
  })

  it('ignores invalid options', () => {
    expect(typeof getSortingFunction('random')).not.toBe('function')
  })
})
