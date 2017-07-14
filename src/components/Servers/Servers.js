import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Server from './Server'
import { styles } from  './Servers.style'

@styles
export default class Servers extends PureComponent {
  render () {
    const {servers, classes} = this.props

    if (!servers || servers.length === 0) {
      return null
    }

    return (
      <div className={classes.servers}>
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
  })),
  classes: PropTypes.object
}
