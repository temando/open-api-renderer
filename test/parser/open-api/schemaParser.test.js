import getUIReadySchema from '../../../src/parser/open-api/schemaParser';

import inputSchema from './data/schemaParser/inputSchema.json';
import expectedOutputSchema from './data/schemaParser/outputSchema.json';
import complexInputSchema from './data/schemaParser/complexInputSchema.json';
import complexExpectedOutputSchema from './data/schemaParser/complexOutputSchema.json';

describe('getUIReadySchema', () => {
  it('returns the correct result', () => {
    const outputSchema = getUIReadySchema(inputSchema);
    expect(outputSchema).toEqual(expectedOutputSchema);
  });

  it('returns the correct result', () => {
    const outputSchema = getUIReadySchema(complexInputSchema);
    expect(outputSchema).toEqual(complexExpectedOutputSchema);
  });
});
