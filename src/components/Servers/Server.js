import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Server extends PureComponent {
  render () {
    const {url, description} = this.props

    return (
      <div>
        {description && <label>{description} - </label>}
        <label>{url}</label>
      </div>
    )
  }
}

Server.propTypes = {
  url: PropTypes.string,
  description: PropTypes.string,
}
