import fetch from 'fetch-everywhere'

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

  // TODO change this to JSON parsing when
  // https://github.com/Mermade/openapi-webconverter/issues/2 is resolved
  const response = await result.text()
  const status = response.split(' ')[1]

  if (status === 'false') {
    throw new Error(`The definition did not validate, please see ${VALIDATOR_HOST}.`)
  }

  return true
}
