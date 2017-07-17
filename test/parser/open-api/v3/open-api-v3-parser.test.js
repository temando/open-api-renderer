import { getTestsFromFixtures } from '../../../fixtureLoader'
import getUIReadyDefinition from '../../../../src/parser/open-api/v3/open-api-v3-parser'
import { getSortingFunction } from '../../../../src/lib/sorting'
import { join } from 'path'

describe('getUIReadyDefinition', () => {
  const dataDirectory = join(__dirname, '/data')
  const tests = getTestsFromFixtures(`${dataDirectory}/inputs`, `${dataDirectory}/outputs`)

  tests.forEach(test => {
    // Expects filenames to be {name.navSortValue.json}.
    const sortFunc = getSortingFunction(test.fileName.split('.')[1])
    it(`returns the correct result for ${test.fileName}`, async () => {
      const outputDefinition = await getUIReadyDefinition(test.input, sortFunc)
      expect(outputDefinition).toEqual(test.expected)
    })
  })
})
