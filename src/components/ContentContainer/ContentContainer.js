import React, { Component } from 'react'
import injectSheet, { withTheme } from 'react-jss'
import PropTypes from 'prop-types'
import { styles } from './ContentContainer.styles'

@withTheme
@injectSheet(styles)
export default class ContentContainer extends Component {
  render () {
    const { classes } = this.props

    return (
      <div className={classes.contentContainer}>
        {this.props.children}
      </div>
    )
  }
}

ContentContainer.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object
}
