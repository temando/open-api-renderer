import React, { PureComponent } from 'react'
import injectSheet, { withTheme } from 'react-jss'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Description from '../Description/Description'
import ExternalLink from '../ExternalLink/ExternalLink'
import { styles } from './Docs.styles'

@withTheme
@injectSheet(styles)
export default class Docs extends PureComponent {
  render () {
    const { url, description, classes } = this.props

    return (
      <div className={classNames(classes.docs)}>
        {description && <Description description={description} />}
        <ExternalLink href={url}>More information »</ExternalLink>
      </div>
    )
  }
}

Docs.propTypes = {
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
  classes: PropTypes.object
}
