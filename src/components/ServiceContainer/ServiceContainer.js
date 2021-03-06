import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Docs from '../Docs/Docs'
import Method from '../Method/Method'

export default class ServiceContainer extends PureComponent {
  render () {
    const { service, initialSchemaTreeDepth } = this.props
    const { title, docs, methods } = service

    return (
      <div id={title}>
        <h2>{title}</h2>
        {docs && <Docs {...docs} />}
        {methods.map(
          (method) => <Method key={method.link} method={method} initialSchemaTreeDepth={initialSchemaTreeDepth} />
        )}
      </div>
    )
  }
}

ServiceContainer.propTypes = {
  service: PropTypes.object,
  initialSchemaTreeDepth: PropTypes.number
}
