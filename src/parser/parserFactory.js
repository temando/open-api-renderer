import getUIReadyDefinition from './open-api/v3/open-api-v3-parser'
import { validateDefinition } from './open-api/v3/open-api-v3-validator'

/**
 * @param {string} type
 * @return {Function<Promise>}
 */
export function getParserFunction (type) {
  if (type === 'open-api-v3') {
    return getUIReadyDefinition
  }

  const errorMsg = `Invalid type: ${type}`
  throw new Error(errorMsg)
}

/**
 * @param {string} type
 * @return {Function<Promise>}
 */
export function getValidatorFunction (type) {
  if (type === 'open-api-v3') {
    return validateDefinition
  }

  const errorMsg = `Invalid type: ${type}`
  throw new Error(errorMsg)
}
