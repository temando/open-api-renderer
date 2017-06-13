import { getTestsFromFixtures } from '../../fixtureLoader'
import { resolveAllOf } from '../../../src/parser/open-api/allOfResolver'
import { join } from 'path'

describe('resolveAllOf', () => {
  const dataDirectory = join(__dirname, '/data/allOfResolver')
  const tests = getTestsFromFixtures(`${dataDirectory}/inputs`, `${dataDirectory}/outputs`)

  tests.forEach(test => {
    it(`returns the correct result for ${test.fileName}`, async () => {
      const outputDefinition = resolveAllOf(test.input)
      expect(outputDefinition).toEqual(test.expected)
    })
  })
})
