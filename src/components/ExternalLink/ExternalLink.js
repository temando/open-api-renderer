import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class ExternalLink extends PureComponent {
  render () {
    return (
      <a className='ext-link' rel='noopener noreferrer' target='_blank' href={this.props.href}>
        {this.props.children}
      </a>
    )
  }
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}
