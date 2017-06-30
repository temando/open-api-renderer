import { parseDefinition } from '../../src/lib/definitions'
import * as definitions from './definitions'
import { Benchmark } from './Benchmark'
import { join } from 'path'

// Big:
// http://open-api.s3-website-ap-southeast-2.amazonaws.com/v3/RC2/pcanary-open-api-v3.0.0-RC2.json
(async () => {
  const benchDir = join(__dirname, 'snapshots')
  const createRunner = (definition) => async () => {
    await parseDefinition({ definition, parserType: 'open-api-v3' })
  }

  {
    const bench = await new Benchmark('parseDefinition-petStore')
      .run(createRunner(definitions.petStore))

    console.log(bench.serialize())

    await bench.saveSnapshot(join(benchDir, bench.key))
  }

  {
    const bench = await new Benchmark('parseDefinition-temandoFull')
      .run(createRunner(definitions.temandoFull))

    console.log(bench.serialize())

    await bench.saveSnapshot(join(benchDir, bench.key))
  }
})()
