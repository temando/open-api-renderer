import { getTestsFromFixtures } from '../../fixtureLoader'
import getUIReadySchema from '../../../src/parser/open-api/schemaParser'
import { join } from 'path'

describe('getUIReadySchema', () => {
  const dataDirectory = join(__dirname, '/data/schemaParser')
  const tests = getTestsFromFixtures(`${dataDirectory}/inputs`, `${dataDirectory}/outputs`)

  tests.forEach(test => {
    it(`returns the correct result for ${test.fileName}`, async () => {
      const outputDefinition = getUIReadySchema(test.input)
      expect(outputDefinition).toEqual(test.expected)
    })
  })
})
