import request from 'superagent'
import yaml from 'js-yaml'
import getParserFunction from '../parser/parserFactory'

export async function getDefinition (url) {
  if (!url) { throw new Error('Missing url') }

  const response = await request
    .get(url)
    .timeout({
      response: 5000,
      deadline: 60000
    })

  let definition = response.body

  // TODO move this to another place
  if (url.endsWith('.yaml') || url.endsWith('.yml')) {
    definition = yaml.safeLoad(response.text)
  } else if (url.endsWith('json')) {
    definition = JSON.parse(response.text)
  }

  return definition
}

export async function parseDefinition (definition, parserType) {
  const parser = getParserFunction(parserType)

  const parsedDefinition = await parser(definition)

  return parsedDefinition
}
