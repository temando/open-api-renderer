import { parseDefinition } from '../../src/lib/definitions'
import definition from './definition'
import { Benchmark } from './Benchmark'
import { join } from 'path'

describe('Benchmark', () => {
  global.jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000

  const benchDir = join(__dirname, 'snapshots')

  it('lib/parseDefinition', async () => {
    const bench = await new Benchmark('parseDefinition')
      .run(async () => {
        await parseDefinition({ definition, parserType: 'open-api-v3' })
      })

    console.log(bench.serialize())

    await bench.saveSnapshot(join(benchDir, bench.key))
  })
})
