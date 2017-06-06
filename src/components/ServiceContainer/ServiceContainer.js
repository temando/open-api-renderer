import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Method from '../Method/Method'

export default class ServiceContainer extends PureComponent {
  render () {
    const { service } = this.props
    const { title, methods } = service

    return (
      <div className='service-container' id={title}>
        <h2>{title}</h2>
        {methods.map(
          (method) => <Method key={method.link} method={method} />
        )}
      </div>
    )
  }
}

ServiceContainer.propTypes = {
  service: PropTypes.object
}
