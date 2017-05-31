import getUIReadyDefinition from './open-api/v3/open-api-v3-parser'

export default function getParserFunction (type) {
  if (type === 'open-api-v3') {
    return getUIReadyDefinition
  }

  const errorMsg = `Invalid parser type: ${type}`
  console.error(errorMsg)
  throw new Error(errorMsg)
}
