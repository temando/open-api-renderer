import { expect } from 'chai';
import inputSchema from './inputSchema.json';
import expectedOutputSchema from './outputSchema.json';
import getUIReadySchema from '../../../src/parser/open-api-v3/schemaParser';

describe('getUIReadySchema', () => {
  it('returns the correct result', () => {
    const outputSchema = getUIReadySchema(inputSchema);

    expect(outputSchema).to.deep.equal(expectedOutputSchema);
  });
});
