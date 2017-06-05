import React, { PureComponent } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import PropTypes from 'prop-types'

import Method from '../Method/Method'

// import './ServiceContainer.scss';

export default class ServiceContainer extends PureComponent {
  render () {
    const { service } = this.props
    const { title, methods } = service

    return (
      <ScrollableAnchor id={title}>
        <div className='service-container'>
          <h2>{title}</h2>
          {methods.map(
            (method) => <Method key={method.link} method={method} />
          )}
        </div>
      </ScrollableAnchor>
    )
  }
}

ServiceContainer.propTypes = {
  service: PropTypes.object
}
