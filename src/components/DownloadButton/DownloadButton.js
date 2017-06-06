import React, { PropTypes, PureComponent } from 'react'
import './DownloadButton.scss'

export default class DownloadButton extends PureComponent {
  render () {
    return (
      <a className='download-button' target='_blank' href={this.props.url}>Download</a>
    )
  }
}

DownloadButton.propTypes = {
  url: PropTypes.string
}
