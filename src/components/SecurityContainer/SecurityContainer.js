import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Description from '../Description/Description'

import './SecurityContainer.scss'

export default class SecurityContainer extends PureComponent {
  render () {
    const { id, security } = this.props
    const isSimple = ['apiKey', 'http'].includes(security.type)

    return (
      <section className='security-container' id={id}>
        {isSimple && this.renderSimple(security)}
        {security.type === 'oauth2' && this.renderOAuth2(security)}
        {security.type === 'openIdConnect' && this.renderOpenIdConnect(security)}
      </section>
    )
  }

  renderSimple (security) {
    const { name, type, description, example, bearerFormat } = security
    let usage

    if (security.in === 'query') {
      usage = <p>To use this authentication scheme, add <code>{example}</code> to request URLs.</p>
    } else {
      usage = <p>To use this authentication scheme, pass <code>{example}</code>{bearerFormat ? `, formatted as ${bearerFormat}` : ''} as a request header.</p>
    }

    return (
      <div>
        <h3>{name} <code className='scheme'>type={type}</code></h3>
        {description && <Description description={description} />}
        {usage}
      </div>
    )
  }

  renderOAuth2 (security) {
    const { name, type, description, flows } = security

    return (
      <div>
        <h3>{name} <code className='scheme'>type={type}</code></h3>
        {description && <Description description={description} />}
        {Object.keys(flows).map((flowKey) => {
          const flow = flows[flowKey]

          return (
            <div className='flow-type' key={flowKey}>
              <h4><code>{flowKey}</code> flow</h4>
              <dl className='inline-pairs'>
                {flow.authorizationUrl && [
                  <dt key='auth'>Authorization URL</dt>,
                  <dd key='auth-value'>{flow.authorizationUrl}</dd>
                ]}
                {flow.tokenUrl && [
                  <dt key='token'>Token URL</dt>,
                  <dd key='token-value'>{flow.tokenUrl}</dd>
                ]}
                {flow.refreshUrl && [
                  <dt key='refresh'>Refresh URL</dt>,
                  <dd key='refresh-value'>{flow.refreshUrl}</dd>
                ]}
              </dl>
              <div className='scopes'>
                <h5>Available scopes</h5>
                {this.renderScopes(flow.scopes)}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  renderScopes (scopes) {
    return (
      <ul>
        {Object.keys(scopes).map(
          (scope) => <li key={scope}><strong>{scope}</strong> {scopes[scope]}</li>)
        }
      </ul>
    )
  }

  renderOpenIdConnect (security) {
    const { name, type, description, openIdConnectUrl } = security

    return (
      <div>
        <h3>{name} <code className='scheme'>type={type}</code></h3>
        {description && <Description description={description} />}
        <dl className='inline-pairs'>
          <dt>OpenID Connect URL</dt>
          <dd>{openIdConnectUrl}</dd>
        </dl>
      </div>
    )
  }
}

SecurityContainer.propTypes = {
  id: PropTypes.string,
  security: PropTypes.object
}
