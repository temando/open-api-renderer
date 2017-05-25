import { expect } from 'chai';
import inputSchema from './data/schemaParser/inputSchema.json';
import expectedOutputSchema from './data/schemaParser/outputSchema.json';
import getUIReadySchema from '../../../src/parser/open-api/schemaParser';

describe('getUIReadySchema', () => {
  it('returns the correct result', () => {
    const outputSchema = getUIReadySchema(inputSchema);
    expect(outputSchema).to.deep.equal(expectedOutputSchema);
  });
});
