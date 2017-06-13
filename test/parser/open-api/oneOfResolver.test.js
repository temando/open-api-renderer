import { getTestsFromFixtures } from '../../fixtureLoader'
import { resolveOneOf } from '../../../src/parser/open-api/oneOfResolver'
import { join } from 'path'

describe('resolveOneOf', () => {
  const dataDirectory = join(__dirname, '/data/oneOfResolver')
  const tests = getTestsFromFixtures(`${dataDirectory}/inputs`, `${dataDirectory}/outputs`)

  tests.forEach(test => {
    it(`returns the correct result for ${test.fileName}`, async () => {
      const outputDefinition = resolveOneOf(test.input)
      expect(outputDefinition).toEqual(test.expected)
    })
  })
})
