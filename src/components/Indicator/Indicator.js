import React, { PureComponent } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { styles } from './Indicator.styles'
import arrow from './arrow.png'

@styles
export default class Indicator extends PureComponent {
  render () {
    const { direction, className, classes } = this.props

    return (
      <div className={classNames(
        classes.indicator,
        className,
        classes[direction]
      )}>
        <img src={arrow} alt='' title='arrow' />
      </div>
    )
  }
}

Indicator.propTypes = {
  direction: PropTypes.string,
  classes: PropTypes.object,
  className: PropTypes.string
}
