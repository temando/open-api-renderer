import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './ContentContainer.scss'

export default class ContentContainer extends PureComponent {
  render () {
    return (
      <div className='content-container'>
        {this.props.children}
      </div>
    )
  }
}

ContentContainer.propTypes = {
  children: PropTypes.any
}
