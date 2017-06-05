import React, { PureComponent } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './Indicator.scss'

const arrow = require('./arrow.png')

export default class Indicator extends PureComponent {
  render () {
    const { direction, className } = this.props

    return (
      <span className={classNames('indicator', className, {
        [`indicator--${direction}`]: direction
      })}>
        <img src={arrow} alt='' title='arrow' />
      </span>
    )
  }
}

Indicator.propTypes = {
  direction: PropTypes.string,
  className: PropTypes.string
}
