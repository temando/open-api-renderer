import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { styles } from './Endpoint.style'

@styles
export default class Endpoint extends PureComponent {
  constructor (props) {
    super(props)

    this.handleFocus = this.handleFocus.bind(this)
  }

  render () {
    const {url, description, classes} = this.props

    return (
      <div className={classes.endpoint}>
        {description && <div>{description}</div>}
        <input className={classes.readonly} defaultValue={url} readOnly onFocus={this.handleFocus} />
      </div>
    )
  }

  handleFocus (event) {
    event.target.select()
  }
}

Endpoint.propTypes = {
  url: PropTypes.string,
  description: PropTypes.string,
  classes: PropTypes.object
}
