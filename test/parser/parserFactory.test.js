import { getParserFunction, getValidatorFunction } from '../../src/parser/parserFactory'

describe('#getParserFunction', () => {
  it('handles open api v3', () => {
    const func = getParserFunction('open-api-v3')

    expect(typeof (func)).toBe('function')
  })

  it('throws error for invalid type', () => {
    const func = () => getParserFunction('chubba')
    expect(func).toThrowError()
  })
})

describe('#getValidatorFunction', () => {
  it('handles open api v3', () => {
    const func = getValidatorFunction('open-api-v3')

    expect(typeof (func)).toBe('function')
  })

  it('throws error for invalid type', () => {
    const func = () => getValidatorFunction('chubba')
    expect(func).toThrowError()
  })
})
