import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import PropTypes from 'prop-types'

import Method from '../Method/Method'

// import './ServiceContainer.scss';

export default class ServiceContainer extends Component {
  render () {
    const { service } = this.props
    const methods = service.methods
    const title = service.title

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
