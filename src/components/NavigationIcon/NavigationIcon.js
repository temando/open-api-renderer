import React, { Component } from 'react'
import injectSheet, { withTheme } from 'react-jss'
import PropTypes from 'prop-types'
import { styles } from './NavigationIcon.styles'

@withTheme
@injectSheet(styles)
export default class NavigationIcon extends Component {
  constructor (props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  render () {
    const { classes } = this.props

    return (
      <div className={classes.navigationIcon} onClick={this.onClick}>
        &#9776;
      </div>
    )
  }

  onClick () {
    this.props.onClick()
  }
}

NavigationIcon.propTypes = {
  classes: PropTypes.object,
  onClick: PropTypes.func
}
