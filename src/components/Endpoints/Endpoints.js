import React, { PureComponent } from 'react'
import injectSheet, { withTheme } from 'react-jss'
import PropTypes from 'prop-types'
import Endpoint from './Endpoint'
import { styles } from './Endpoints.style'

@withTheme
@injectSheet(styles)
export default class Endpoints extends PureComponent {
  render () {
    const {endpoints, classes} = this.props

    if (!endpoints || endpoints.length === 0) {
      return null
    }

    return (
      <div className={classes.endpoints}>
        {endpoints.map(endpoint => <Endpoint key={endpoint.url} url={endpoint.url} description={endpoint.description} />)}
      </div>
    )
  }
}

Endpoints.propTypes = {
  endpoints: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    description: PropTypes.string
  })),
  classes: PropTypes.object
}
