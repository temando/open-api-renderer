import Bench from 'benchmark'
import { writeFile, ensureDir } from 'fs-extra'
import { dirname } from 'path'
import { cloneDeep } from 'lodash'

export class Benchmark {
  key;
  config;

  constructor (key, config = {}) {
    Object.assign(this, { key, config })
  }

  async run (task) {
    async function fn (defer) {
      await task()
      defer.resolve()
    }

    this.results = []

    await new Promise((resolve) => {
      const bench = new Bench(this.key, {
        defer: true,
        async: true,
        onComplete: resolve,
        onCycle: (event) => {
          this.results.push(cloneDeep(event.target))

          if (this.config.onCycle) { this.config.onCycle(event) }
        },
        fn,
        ...this.config
      })

      bench.run()
    })

    return this
  }

  serialize (results = this.results) {
    return results.slice(-3).map((result) => {
      return String(result)
    }).join('\n')
  }

  async saveSnapshot (filePath, results = this.results) {
    const dir = dirname(filePath)

    await ensureDir(dir)
    return writeFile(filePath, this.serialize(results), 'utf8')
  }
}
