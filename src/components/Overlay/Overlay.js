import React from 'react'
import PropTypes from 'prop-types'
import './Overlay.scss'

export default class Overlay extends React.PureComponent {
  render () {
    const { children } = this.props

    return <div className='overlay'>{children}</div>
  }
}

Overlay.propTypes = {
  children: PropTypes.node
}
