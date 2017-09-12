import { validateDefinition } from '../../../../src/parser/open-api/v3/open-api-v3-validator'

jest.mock('fetch-everywhere')

describe('#validateDefinition', () => {
  test('returns true for valid definition', async () => {
    const fetch = require('fetch-everywhere')

    fetch.mockImplementationOnce((url) => Promise.resolve({
      ok: true,
      json: jest.fn().mockReturnValue({
        status: true
      })
    }))

    expect(await validateDefinition('http://example.org')).toBeTruthy()
    expect(fetch).toBeCalled()

    fetch.mockReset()
  })

  test('throws error for invalid definition', async () => {
    const fetch = require('fetch-everywhere')

    fetch.mockImplementationOnce((url) => Promise.resolve({
      ok: true,
      json: jest.fn().mockReturnValue({
        status: false
      })
    }))

    expect.assertions(2)
    try {
      await validateDefinition('http://bad-example.org')
    } catch (err) {
      expect(err.message).toMatch('The definition did not validate')
      expect(fetch).toBeCalled()
    }

    fetch.mockReset()
  })
})
