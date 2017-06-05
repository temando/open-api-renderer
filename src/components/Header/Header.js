import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Description from '../Description/Description'
import './Header.scss'

export default class Header extends PureComponent {
  render () {
    const { title, description, version } = this.props

    return (
      <header id='header'>
        <h1>{title}</h1>
        <Description description={description} />
        <div>
          <span>Version: </span>
          <span>{version}</span>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  description: PropTypes.string
}
