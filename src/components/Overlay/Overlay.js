import React from 'react'
import injectSheet, { withTheme } from 'react-jss'
import PropTypes from 'prop-types'
import { styles } from './Overlay.styles'

@withTheme
@injectSheet(styles)
export default class Overlay extends React.PureComponent {
  render () {
    const { children, classes } = this.props

    return <div className={classes.overlay}>{children}</div>
  }
}

Overlay.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object
}
