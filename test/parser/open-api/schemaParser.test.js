import { getTestsFromFixtures } from '../../fixtureLoader'
import getUIReadySchema from '../../../src/parser/open-api/schemaParser'

describe('getUIReadySchema', () => {
  const dataDirectory = __dirname + '/data/schemaParser'
  const tests = getTestsFromFixtures(`${dataDirectory}/inputs`, `${dataDirectory}/outputs`)

  tests.forEach(test => {
    it(`returns the correct result for ${test.fileName}`, async () => {
      if (test.fileName === 'array.json') {
        const outputDefinition = getUIReadySchema(test.input)
        expect(outputDefinition).toEqual(test.expected)
      }
    })
  })
})
