import { parseDefinition } from '../../src/lib/definitions';
import * as definitions from './definitions';
import { join } from 'path';

const swagger = require('./definitions/temandoFull.json');
const suite = async () => {
  return await parseDefinition({ definition: swagger, parserType: 'open-api-v3' });
};

suite().then((data) => {
  console.log(data);
}).catch((err) => {
  console.error(err);
});

