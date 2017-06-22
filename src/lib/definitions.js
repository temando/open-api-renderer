import request from 'superagent'
import yaml from 'js-yaml'
import { getParserFunction, getValidatorFunction } from '../parser/parserFactory'
import { getSortingFunction } from './sorting'

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

export function validateDefinition (definition, parserType) {
  const validator = getValidatorFunction(parserType)

  return validator(definition)
}

export async function parseDefinition ({ definition, parserType, navSortType }) {
  const parser = getParserFunction(parserType)
  const sortFunc = getSortingFunction(navSortType)
  const parsedDefinition = await parser(definition, sortFunc)

  return parsedDefinition
}
