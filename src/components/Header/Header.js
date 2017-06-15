import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Description from '../Description/Description'
import DownloadButton from '../DownloadButton/DownloadButton'
import './Header.scss'

export default class Header extends PureComponent {
  render () {
    const { title, version, description, specUrl } = this.props

    return (
      <header id='header'>
        <h1>{title}</h1>
        <Description description={description} />
        <div>
          <DownloadButton url={specUrl}>Download this Open API definition.</DownloadButton>
        </div>
        <dl>
          <dt>Version</dt>
          <dd>{version}</dd>
        </dl>
      </header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  description: PropTypes.string,
  specUrl: PropTypes.string
}
