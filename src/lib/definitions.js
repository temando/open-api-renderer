import fetch from 'fetch-everywhere'
import YAML from 'js-yaml'
import { getParserFunction, getValidatorFunction } from '../parser/parserFactory'
import { getSortingFunction } from './sorting'

export async function getDefinition (url) {
  if (!url) { throw new Error('Missing url') }

  const result = await fetch(url)

  if (!result.ok) {
    throw new Error(result.statusText)
  }

  return result.text()
}

export function validateDefinition (definition, parserType) {
  const validator = getValidatorFunction(parserType)

  return validator(definition)
}

export async function parseDefinition ({ definition, parserType, navSort }) {
  if (typeof definition === 'string') {
    definition = YAML.safeLoad(definition)
  }

  const parser = getParserFunction(parserType)
  const sortFunc = getSortingFunction(navSort)
  const parsedDefinition = await parser(definition, sortFunc)

  return parsedDefinition
}
