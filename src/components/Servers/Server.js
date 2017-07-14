import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { styles } from  './Server.style'

@styles
export default class Server extends PureComponent {
  constructor (props) {
    super(props)

    this.handleFocus = this.handleFocus.bind(this)
  }

  render () {
    const {url, description, classes} = this.props

    return (
      <div className={classes.server}>
        {description && <div><label>{description}</label></div>}
        <input className={classes.readonly} value={url} onFocus={this.handleFocus} />
      </div>
    )
  }

  handleFocus (event) {
    event.target.select()
  }
}

Server.propTypes = {
  url: PropTypes.string,
  description: PropTypes.string,
  classes: PropTypes.object
}
