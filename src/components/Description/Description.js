import React, { PureComponent } from 'react'
import injectSheet, { withTheme } from 'react-jss'
import classNames from 'classnames'
import markdown from 'markdown-it'
import PropTypes from 'prop-types'
import { styles } from './Description.styles'

const cm = markdown('commonmark')

@withTheme
@injectSheet(styles)
export default class Description extends PureComponent {
  render () {
    const { isInline, description, classes } = this.props

    let text
    if (isInline) {
      text = {
        __html: cm.renderInline(description)
      }
    } else {
      text = {
        __html: cm.render(description)
      }
    }

    return (
      <div className={classNames(classes.description, {
        [classes.inline]: isInline
      })} dangerouslySetInnerHTML={text} />
    )
  }
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
  isInline: PropTypes.bool,
  classes: PropTypes.object
}
