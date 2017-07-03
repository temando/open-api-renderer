import { parseDefinition } from '../../src/lib/definitions'

const swagger = require('./definitions/temandoFull.json')

parseDefinition({ definition: swagger, parserType: 'open-api-v3' })
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
