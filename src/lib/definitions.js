import fetch from 'isomorphic-fetch'
import yaml from 'js-yaml'
import { getParserFunction, getValidatorFunction } from '../parser/parserFactory'
import { getSortingFunction } from './sorting'

export async function getDefinition (url) {
  if (!url) { throw new Error('Missing url') }

  const result = await fetch(url)

  if (!result.ok) {
    throw new Error(result.statusText)
  }

  let definition = {}

  // TODO move this to another place
  if (url.endsWith('.yaml') || url.endsWith('.yml')) {
    definition = yaml.safeLoad(await result.text())
  } else if (url.endsWith('json')) {
    definition = await result.json()
  }

  return definition
}

export function validateDefinition (definition, parserType) {
  const validator = getValidatorFunction(parserType)

  return validator(definition)
}

export async function parseDefinition ({ definition, parserType, navSort }) {
  const parser = getParserFunction(parserType)
  const sortFunc = getSortingFunction(navSort)
  const parsedDefinition = await parser(definition, sortFunc)

  return parsedDefinition
}
