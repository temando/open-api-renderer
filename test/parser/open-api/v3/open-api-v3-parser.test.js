import { getTestsFromFixtures } from '../../../fixtureLoader'
import getUIReadyDefinition from '../../../../src/parser/open-api/v3/open-api-v3-parser'
import { join } from 'path'

describe('getUIReadyDefinition', () => {
  const dataDirectory = join(__dirname, '/data')
  const tests = getTestsFromFixtures(`${dataDirectory}/inputs`, `${dataDirectory}/outputs`)

  tests.forEach(test => {
    it(`returns the correct result for ${test.fileName}`, async () => {
      const outputDefinition = await getUIReadyDefinition(test.input)
      expect(outputDefinition).toEqual(test.expected)
    })
  })
})
