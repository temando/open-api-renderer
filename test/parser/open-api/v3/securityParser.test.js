import { getSecurity, getUISecurity } from '../../../../src/parser/open-api/v3/securityParser'
import cloneDeep from 'lodash/cloneDeep'

describe('getSecurity', () => {
  // Abbreviated Open API definition.
  const definition = { components: { securitySchemes: {} } }

  test('handles header apiKey type', () => {
    const def = cloneDeep(definition)
    def.components.securitySchemes['api_key'] = {
      type: 'apiKey',
      name: 'api_key',
      in: 'header'
    }

    const security = getSecurity(def)
    expect(security).toHaveProperty('api_key.type', 'apiKey')
    expect(security).toHaveProperty('api_key.name', 'api_key')
    expect(security).toHaveProperty('api_key.example', 'api_key: credentials')
  })

  test('handles query apiKey type', () => {
    const def = cloneDeep(definition)
    def.components.securitySchemes['api_key'] = {
      type: 'apiKey',
      name: 'api_key',
      in: 'query'
    }

    const security = getSecurity(def)
    expect(security).toHaveProperty('api_key.type', 'apiKey')
    expect(security).toHaveProperty('api_key.name', 'api_key')
    expect(security).toHaveProperty('api_key.example', '?api_key=credentials')
  })

  test('handles http type', () => {
    const def = cloneDeep(definition)
    def.components.securitySchemes['basicAuth'] = {
      type: 'http',
      scheme: 'basic'
    }

    const security = getSecurity(def)
    expect(security).toHaveProperty('basicAuth.type', 'http')
    expect(security).toHaveProperty('basicAuth.name', 'basicAuth')
    expect(security).toHaveProperty('basicAuth.example', 'Authorization: basic credentials')
  })

  test('handles http type with bearerFormat', () => {
    const def = cloneDeep(definition)
    def.components.securitySchemes['JWT'] = {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT'
    }

    const security = getSecurity(def)
    expect(security).toHaveProperty('JWT.type', 'http')
    expect(security).toHaveProperty('JWT.name', 'JWT')
    expect(security).toHaveProperty('JWT.example', 'Authorization: bearer credentials')
    expect(security).toHaveProperty('JWT.bearerFormat', 'JWT')
  })

  test('handles oauth2 type', () => {
    const def = cloneDeep(definition)
    def.components.securitySchemes['oauth2'] = {
      type: 'oauth2',
      flows: {
        implicit: {
          authorizationUrl: 'https://example.com/api/oauth/dialog',
          scopes: {
            'write:pets': 'modify pets in your account',
            'read:pets': 'read your pets'
          }
        },
        authorizationCode: {
          authorizationUrl: 'https://example.com/api/oauth/dialog',
          tokenUrl: 'https://example.com/api/oauth/token',
          scopes: {
            'write:pets': 'modify pets in your account',
            'read:pets': 'read your pets'
          }
        }
      }
    }

    const security = getSecurity(def)
    expect(security).toHaveProperty('oauth2.type', 'oauth2')
    expect(security).toHaveProperty('oauth2.name', 'oauth2')
  })

  test('handles openIdConnect', () => {
    const def = cloneDeep(definition)
    def.components.securitySchemes['openIdConnect'] = {
      type: 'openIdConnect',
      openIdConnect: 'https://example.com/openIdConnect'
    }

    const security = getSecurity(def)
    expect(security).toHaveProperty('openIdConnect.type', 'openIdConnect')
    expect(security).toHaveProperty('openIdConnect.name', 'openIdConnect')
  })
})

describe('getUISecurity', () => {
  const securityDefs = {
    oauth2: {
      name: 'oauth2',
      type: 'oauth2',
      flows: {
        implicit: {
          authorizationUrl: 'https://example.com/api/oauth/dialog',
          scopes: {
            'write:pets': 'modify pets in your account',
            'read:pets': 'read your pets'
          }
        },
        authorizationCode: {
          authorizationUrl: 'https://example.com/api/oauth/dialog',
          tokenUrl: 'https://example.com/api/oauth/token',
          scopes: {
            'write:pets': 'modify pets in your account',
            'read:pets': 'read your pets'
          }
        }
      }
    },
    api_key: {
      type: 'apiKey',
      name: 'api_key',
      in: 'header',
      example: 'api_key: credentials'
    }
  }

  test('can add scopes', () => {
    const opSecurity = [
      {
        oauth2: [ 'write:pets' ]
      }
    ]

    expect(getUISecurity(opSecurity, securityDefs)).toHaveProperty('oauth2.applicableScopes', ['write:pets'])
  })

  test('can add security (no scopes)', () => {
    const opSecurity = [
      {
        'api_key': []
      }
    ]

    expect(getUISecurity(opSecurity, securityDefs)).toHaveProperty('api_key.name', 'api_key')
  })

  test('can remove security', () => {
    const opSecurity = []

    expect(getUISecurity(opSecurity, securityDefs)).toEqual({})
  })
})
