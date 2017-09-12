import fetch from 'fetch-everywhere'

const VALIDATOR_HOST = 'https://openapi-converter.herokuapp.com'

/**
 * @param {string} definitionUrl
 * @return {Promise<boolean>}
 */
export async function validateDefinition (definitionUrl) {
  const url = `${VALIDATOR_HOST}/api/v1/validate`
  const result = await fetch(`${url}?url=${definitionUrl}`)

  if (result.ok) {
    const response = await result.json()

    if (response.status === false) {
      throw new Error(`The definition did not validate, see ${VALIDATOR_HOST}.`)
    }
  }

  return true
}
