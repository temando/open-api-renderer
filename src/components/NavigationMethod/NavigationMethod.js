import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { styles } from './NavigationMethod.styles'

@styles
export default class NavigationMethod extends PureComponent {
  render () {
    const { method, isActive, isOpen, classes } = this.props

    return (
      <a
        className={classNames(classes.navigationMethod, {
          [classes.active]: isActive,
          [classes.open]: isOpen,
          [classes.closed]: !isOpen
        })}
        href={`#${method.link}`}
      >
        <span className={classes.type}>{method.type.toUpperCase()}</span>
        <span className={classes.title}>{method.title}</span>
      </a>
    )
  }
}

NavigationMethod.propTypes = {
  method: PropTypes.object,
  isActive: PropTypes.bool,
  isOpen: PropTypes.bool,
  classes: PropTypes.object
}
