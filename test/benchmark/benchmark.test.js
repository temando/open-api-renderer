import { Suite } from 'benchmark'
import { parseDefinition } from '../../src/lib/definitions'
import definition from './definition'

describe('Benchmark', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000
  global.support = { browser: false }

  it('lib/parseDefinition', async () => {
    await new Promise((resolve) => {
      new Suite('parseDefinition')
        .add('parseDefinition', (deferred) => {
          new Date().getTime()
          return deferred.resolve()
        })
        .on('cycle', (event) => {
          console.log(String(event.target))
        })
        .on('complete', resolve)
        .run({ defer: true })
    })

    // suite.add('parseDefinition', async () => {
    //   await parseDefinition({ definition, parserType: 'open-api-v3' })
    // })

    // suite.run({ async: true })

    // await finished

    // console.log(`Result: ${suite.filter('fastest').map('name')}`)
  })
})
