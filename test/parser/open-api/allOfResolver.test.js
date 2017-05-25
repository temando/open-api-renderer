import input from './data/allOfResolver/input.json';
import expectedOutput from './data/allOfResolver/output.json';
import { resolveAllOf } from '../../../src/parser/open-api/allOfResolver';

describe('resolveAllOf', () => {
  it('returns the correct result', () => {
    const output = resolveAllOf(input);
    expect(output).toEqual(expectedOutput);
  });
});
