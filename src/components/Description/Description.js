import React, { PureComponent } from 'react'
import classNames from 'classnames'
import markdown from 'markdown-it'
import PropTypes from 'prop-types'
import './Description.scss'

const cm = markdown('commonmark')

export default class Description extends PureComponent {
  render () {
    const { isInline, description } = this.props
    const text = {
      __html: cm.render(description)
    }

    return (
      <div className={classNames('description', {
        'description-inline': isInline
      })} dangerouslySetInnerHTML={text} />
    )
  }
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
  isInline: PropTypes.bool
}
