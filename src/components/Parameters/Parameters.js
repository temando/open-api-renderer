import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import BodySchema from '../BodySchema/BodySchema'

export default class Parameters extends PureComponent {
  render () {
    const {parameters, classes} = this.props

    if (!parameters) {
      return null
    }

    const parameterUIElements = []
    for (const key in parameters) {
      const value = parameters[key]
      parameterUIElements.push(
        <div key={key}>
          <h4>{key} Parameters</h4>
          <BodySchema properties={value} />
        </div>
      )
    }

    return (
      <div className={classes.parameters}>
        {parameterUIElements}
      </div>
    )
  }
}

Parameters.propTypes = {
  parameters: PropTypes.object,
  classes: PropTypes.object
}
