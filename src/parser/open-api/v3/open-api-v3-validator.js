import request from 'superagent'

const VALIDATOR_HOST = 'https://openapi-converter.herokuapp.com'

/**
 * @param {string} definitionUrl
 * @return {Promise<boolean>}
 */
export async function validateDefinition (definitionUrl) {
  const url = `${VALIDATOR_HOST}/api/v1/validate`
  const response = await request.get(`${url}?url=${definitionUrl}`)
    .timeout({
      response: 5000,
      deadline: 60000
    })

  if (!response.body.status) {
    throw new Error(`The definition did not validate, see ${VALIDATOR_HOST}.`)
  }

  return true
}
