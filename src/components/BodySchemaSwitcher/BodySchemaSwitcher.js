import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { styles } from './BodySchemaSwitcher.styles'

@styles
export default class BodySchemaSwitcher extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    if (this.props.onChange) {
      this.props.onChange(event.target.value)
    }
  }

  render () {
    const { options, classes } = this.props

    return (
      <form>
        <label>This schema can be fulfilled by multiple options: </label>
        <select className={classes.select} onChange={this.handleChange}>
          {options.map(
            (option, i) => <option key={i} value={i}>{`Option ${i + 1}`}</option>
          )}
        </select>
      </form>
    )
  }
}

BodySchemaSwitcher.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  classes: PropTypes.object
}
