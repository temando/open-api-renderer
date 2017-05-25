import { readdirSync, readJSONSync } from 'fs-extra';
import getUIReadyDefinition from '../../../../src/parser/open-api/v3/open-api-v3-parser';

describe('getUIReadyDefinition', () => {
  const dataDirectory = __dirname + '/data/definition';
  const dataFiles = readdirSync(dataDirectory + '/inputs');

  const tests = [];

  dataFiles.map(dataFile => {
    try {
      const inputData = readJSONSync(dataDirectory + '/inputs/' + dataFile);
      const outputData = readJSONSync(dataDirectory + '/outputs/' + dataFile);

      if (inputData && outputData) {
        tests.push({
          dataFile: dataFile,
          inputDefinition: inputData,
          expectedOutputDefinition: outputData
        });
      }
    } catch (error) {
      console.log(error);
    }
  });

  tests.forEach(test => {
    it(`returns the correct result for ${test.dataFile}`, async () => {
      const outputDefinition = await getUIReadyDefinition(test.inputDefinition);
      expect(outputDefinition).toEqual(test.expectedOutputDefinition);
    });
  });
});
