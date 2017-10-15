import fetch from 'fetch-everywhere'
import yaml from 'js-yaml'

const VALIDATOR_HOST = 'https://openapi-converter.herokuapp.com'

/**
 * @param {string} definitionUrl
 * @return {Promise<boolean>}
 */
export async function validateDefinition (definition) {
  const headers = new Headers({
    'Accept': 'application/json'
  })

  const form = new FormData()

  form.append('source', definition)

  const url = `${VALIDATOR_HOST}/api/v1/validate`
  const fetchOptions = {
    method: 'POST',
    headers: headers,
    body: form
  }
  const result = await fetch(`${url}`, fetchOptions)

  if (result.ok === false) {
    throw new Error(`There was a problem with the validation service, please see the console and ${VALIDATOR_HOST}.`)
  }

  const response = await result.json()

  if (response.status === false) {
    throw new Error(`Validation error, message: ${response.message}, context: ${response.context}`)
  }

  return true
}
