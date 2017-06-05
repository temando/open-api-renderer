import React, { PureComponent } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './Indicator.scss'

const arrow = require('./arrow.png')

export default class Indicator extends PureComponent {
  render () {
    const { status, className } = this.props

    return (
      <span className={classNames('indicator', className, {
        [`indicator--${status}`]: status
      })}>
        <img src={arrow} alt='' title='arrow' />
      </span>
    )
  }
}

Indicator.propTypes = {
  status: PropTypes.string,
  className: PropTypes.string
}
