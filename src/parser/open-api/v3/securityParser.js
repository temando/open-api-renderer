/**
 * Extracts any security schemes from the given OpenAPI V3 definition file.
 * Security schemes are defined in `components.securitySchemes`.
 * The API defines what security applies at either the top level (`security`)
 * or per operation.
 *
 * @param {Object} definition
 * @return {Object}
 */
export function getSecurityDefinitions (definition) {
  let securityDefinitions = {}

  if (definition.components && definition.components.securitySchemes) {
    securityDefinitions = { ...definition.components.securitySchemes }
  }

  // Always set a name.
  Object.keys(securityDefinitions).forEach((key) => {
    const scheme = securityDefinitions[key]
    let example

    if (!scheme.name) {
      scheme.name = key
    }

    if (scheme.type === 'http') {
      example = `Authorization: ${scheme.scheme} credentials`
    } else if (scheme.type === 'apiKey') {
      if (scheme.in === 'query') {
        example = `?${scheme.name}=credentials`
      } else {
        example = `${scheme.name}: credentials`
      }
    }

    if (example) {
      scheme.example = example
    }
  })

  return securityDefinitions
}

/**
 * Simplifies the security definition for operation objects by merging the
 * global definition in.
 *
 * @param {Array} security
 * @param {Object} definitions
 * @return {Object}
 */
export function getUISecurity (security, definitions) {
  return security.reduce((prev, curr) => {
    const name = Object.keys(curr)[0]
    const definition = { ...definitions[name] }

    // If this definition is OAuth2/OpenIdConnect, add the applicable scopes.
    if (['oauth2', 'openIdConnect'].includes(definition.type) && curr[name].length) {
      definition.applicableScopes = curr[name]
    }

    prev[name] = definition

    return prev
  }, {})
}
