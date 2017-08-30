import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Description from '../Description/Description'
import { styles } from './SecurityContainer.styles'

@styles
export default class SecurityContainer extends PureComponent {
  render () {
    const { id, security, classes, placedIn } = this.props
    const { name, type, description } = security
    const isSimple = ['apiKey', 'http'].includes(security.type)
    let title

    if (placedIn === 'schema') {
      title = <h3>{name} <code className={classes.scheme}>type={type}</code></h3>
    } else if (placedIn === 'method') {
      title = <h5>{name} <code className={classes.scheme}>type={type}</code></h5>
    }

    return (
      <section className={classes.securityContainer} id={id}>
        {title}
        {description && <Description description={description} />}
        {isSimple && this.renderSimple(security)}
        {security.type === 'oauth2' && this.renderOAuth2(security)}
        {security.type === 'openIdConnect' && this.renderOpenIdConnect(security)}
      </section>
    )
  }

  renderSimple (security) {
    const { example, bearerFormat } = security
    const { classes } = this.props
    let usage

    if (security.in === 'query') {
      usage = <p>To use this authentication scheme, add <code>{example}</code> to request URLs.</p>
    } else {
      usage = <p>To use this authentication scheme, pass <code>{example}</code>{bearerFormat ? `, formatted as ${bearerFormat}` : ''} as a request header.</p>
    }

    return (
      <div className={classes.simple} >
        {usage}
      </div>
    )
  }

  renderOAuth2 (security) {
    const { classes, placedIn } = this.props
    const { flows } = security

    return (
      <div>
        {Object.keys(flows).map((flowKey) => {
          const flow = flows[flowKey]
          let title

          if (placedIn === 'schema') {
            title = <h4><code>{flowKey}</code> flow</h4>
          } else if (placedIn === 'method') {
            title = <h5><code>{flowKey}</code> flow</h5>
          }

          return (
            <div className={classes.flowType} key={flowKey}>
              {title}
              <dl className={classes.inlinePairs}>
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
              <div className={classes.scopes}>
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
          (scope) => <li key={scope}><span>{scope}</span> {scopes[scope]}</li>)
        }
      </ul>
    )
  }

  renderOpenIdConnect (security) {
    const { classes } = this.props
    const { openIdConnectUrl } = security

    return (
      <div>
        <dl className={classes.inlinePairs}>
          <dt>OpenID Connect URL</dt>
          <dd>{openIdConnectUrl}</dd>
        </dl>
      </div>
    )
  }
}

SecurityContainer.propTypes = {
  id: PropTypes.string,
  security: PropTypes.object,
  classes: PropTypes.object,
  placedIn: PropTypes.oneOf(['schema', 'method'])
}
