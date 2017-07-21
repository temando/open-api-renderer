import React, { PureComponent } from 'react'
import injectSheet, { withTheme } from 'react-jss'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { styles } from './NavigationMethod.styles'

@withTheme
@injectSheet(styles)
export default class NavigationMethod extends PureComponent {
  render () {
    const { method, isActive, isOpen, classes, onClick, navigationMethodDisplayType } = this.props

    return (
      <a
        className={classNames(classes.navigationMethod, {
          [classes.active]: isActive,
          [classes.open]: isOpen,
          [classes.closed]: !isOpen
        })}
        href={`#${method.link}`}
        onClick={onClick}
      >
        <span className={classNames(classes.type, `${method.type}`)}>{method.type.toUpperCase()}</span>
        { (navigationMethodDisplayType === 'all' || navigationMethodDisplayType === 'path') &&
          <span className={classes.path}>{method.path}</span>
        }
        { navigationMethodDisplayType !== 'path' &&
          <span className={classNames(classes.title, {
            'short': navigationMethodDisplayType !== 'all'
          })}>{method.title}</span> }
      </a>
    )
  }
}

NavigationMethod.propTypes = {
  method: PropTypes.object,
  isActive: PropTypes.bool,
  isOpen: PropTypes.bool,
  classes: PropTypes.object,
  onClick: PropTypes.func,
  navigationMethodDisplayType: PropTypes.string
}
