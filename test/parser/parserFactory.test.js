import { expect } from 'chai';
import getParserFunction from '../../src/parser/parserFactory';

describe('getParserFunction', () => {
  it('handles open api v3', () => {
    const func = getParserFunction('open-api-v3');

    expect(typeof(func)).to.equal('function');
  });

  it('throws error for invalid type', () => {
    try {
      getParserFunction('chubba');
    } catch (error) {
      return;
    }

    throw new Error('An error should have been thrown');
  });
});
