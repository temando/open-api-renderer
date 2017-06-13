import getParserFunction from '../../src/parser/parserFactory'

describe('getParserFunction', () => {
  it('handles open api v3', () => {
    const func = getParserFunction('open-api-v3')

    expect(typeof (func)).toBe('function')
  })

  it('throws error for invalid type', () => {
    const func = () => getParserFunction('chubba')
    expect(func).toThrowError()
  })
})
