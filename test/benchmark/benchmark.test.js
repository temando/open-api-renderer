import { parseDefinition } from '../../src/lib/definitions'
import * as definitions from './definitions'
import { Benchmark } from './Benchmark'
import { join } from 'path'

describe('Benchmarks', () => {
  global.jasmine.DEFAULT_TIMEOUT_INTERVAL = 3600000

  const benchDir = join(__dirname, 'snapshots')
  const createRunner = (definition) => async () => {
    await parseDefinition({ definition, parserType: 'open-api-v3' })
  }

  describe('parseDefinition', () => {
    it('petStore', async () => {
      const bench = await new Benchmark('parseDefinition-petStore')
        .run(createRunner(definitions.petStore))

      console.log(bench.serialize())

      await bench.saveSnapshot(join(benchDir, bench.key))
    })

    it('temandoFull', async () => {
      const bench = await new Benchmark('parseDefinition-temandoFull')
        .run(createRunner(definitions.temandoFull))

      console.log(bench.serialize())

      await bench.saveSnapshot(join(benchDir, bench.key))
    })
  })
})
