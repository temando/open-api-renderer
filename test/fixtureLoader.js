import { readdirSync, readFileSync } from 'fs-extra'
import YAML from 'js-yaml'

/**
 * Given the path to the fixture data, and then the expected results,
 * this function returns an array of information that can be loaded
 * into tests.
 *
 * @param {string} inputsDir
 * @param {string} expectationsDir
 * @return {array}
 */
export function getTestsFromFixtures (inputsDir, expectationsDir) {
  const dataFiles = readdirSync(inputsDir)
  const tests = []

  dataFiles.map(fileName => {
    try {
      const inputData = YAML.safeLoad(readFileSync(`${inputsDir}/${fileName}`, 'utf8'));
      const outputData = YAML.safeLoad(readFileSync(`${expectationsDir}/${fileName}`, 'utf8'));

      if (inputData && outputData) {
        tests.push({
          fileName,
          input: inputData,
          expected: outputData
        })
      }
    } catch (error) {
      console.log(error)
    }
  })

  return tests
}
