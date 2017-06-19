import React from 'react'
import SecurityContainer from './../../src/components/SecurityContainer/SecurityContainer'
import renderer from 'react-test-renderer'

describe('<SecurityContainer />', () => {
  it('renders apiKey type', () => {
    const security = {
      type: 'apiKey',
      name: 'api_key',
      in: 'header',
      example: 'api_key: credentials'
    }

    const tree = renderer.create(
      <SecurityContainer id='api_key' security={security} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders http type', () => {
    const security = {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      example: 'Authorization: bearer credentials'
    }

    const tree = renderer.create(
      <SecurityContainer id='JWT' security={security} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders oauth2 type', () => {
    const security = {
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
    }

    const tree = renderer.create(
      <SecurityContainer id='oauth2' security={security} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders openIdConnect type', () => {
    const security = {
      name: 'openIdConnect',
      type: 'openIdConnect',
      openIdConnect: 'https://example.com/openIdConnect'
    }

    const tree = renderer.create(
      <SecurityContainer id='openIdConnect' security={security} />
    )

    expect(tree).toMatchSnapshot()
  })
})
