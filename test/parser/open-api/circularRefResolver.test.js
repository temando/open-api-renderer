import refParser from 'json-schema-ref-parser'
import { getTestsFromFixtures } from '../../fixtureLoader'
import { resolveCircularRef } from '../../../src/parser/open-api/circularRefResolver'
import { join } from 'path'

describe('resolveCircularRef', () => {
  const dataDirectory = join(__dirname, '/data/circularRefResolver')
  const tests = getTestsFromFixtures(`${dataDirectory}/inputs`, `${dataDirectory}/outputs`)

  tests.forEach(test => {
    it(`returns the correct result for ${test.fileName}`, async () => {
      const input = await refParser.dereference(test.input)
      const output = resolveCircularRef(input)
      expect(output).toEqual(test.expected)
    })
  })
})
