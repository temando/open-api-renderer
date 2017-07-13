import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Server from './Server'

export default class Servers extends PureComponent {
  render () {
    const {servers} = this.props

    if (!servers || servers.length === 0) {
      return null
    }

    return (
      <div>
        {servers.map(server => {
          return (
            <Server key={server.url} url={server.url} description={server.description} />
          )
        })}
      </div>
    )
  }
}

Servers.propTypes = {
  servers: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
  }))
}
