import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { styles } from './ContentContainer.styles'

@styles
export default class ContentContainer extends Component {
  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        {this.props.children}
      </div>
    )
  }
}

ContentContainer.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object
}
