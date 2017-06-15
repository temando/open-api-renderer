import React, { PropTypes, PureComponent } from 'react'

export default class DownloadButton extends PureComponent {
  render () {
    return (
      <a className='download-button' rel='noopener noreferrer' target='_blank' href={this.props.url}>
        {this.props.children}
      </a>
    )
  }
}

DownloadButton.propTypes = {
  url: PropTypes.string,
  children: PropTypes.string
}
