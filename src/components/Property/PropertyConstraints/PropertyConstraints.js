import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { styles } from '../Property.styles'
import { getConstraintHints as getArrayHints } from '../../../parser/open-api/constraints/array'
import { getConstraintHints as getNumericHints } from '../../../parser/open-api/constraints/numeric'
import { getConstraintHints as getObjectHints } from '../../../parser/open-api/constraints/object'
import { getConstraintHints as getStringHints } from '../../../parser/open-api/constraints/string'

@styles
export default class PropertyConstraints extends PureComponent {
  render () {
    const { types, isRequired, constraints, classes } = this.props

    return (
      <span className={classes.constraints}>
        {isRequired && <span className={classes.required}>required</span>}
        {constraints && ['number', 'integer'].some(t => types.includes(t)) && this.renderConstraints(constraints, 'numeric')}
        {constraints && types.includes('string') && this.renderConstraints(constraints, 'string')}
        {constraints && types.includes('array') && this.renderConstraints(constraints, 'array')}
        {constraints && types.includes('object') && this.renderConstraints(constraints, 'object')}
      </span>
    )
  }

  /**
   * Renders validation hints for the given constraints and type.
   *
   * @param {object} constraints
   * @param {string} type
   */
  renderConstraints (constraints, type) {
    let validations = []

    const { classes } = this.props

    switch (type) {
      case 'numeric':
        validations = getNumericHints(constraints)
        break
      case 'object':
        validations = getObjectHints(constraints)
        break
      case 'array':
        validations = getArrayHints(constraints)
        break
      case 'string':
      default:
        validations = getStringHints(constraints)
    }

    if (!validations.length) {
      return null
    }

    return (
      <span>
        {validations.map(constraint =>
          <span key={constraint} className={classes[`${type}_constraint`]}>{constraint}</span>
        )}
      </span>
    )
  }
}

PropertyConstraints.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  isRequired: PropTypes.bool,
  classes: PropTypes.object,
  constraints: PropTypes.shape({
    format: PropTypes.string,
    exclusiveMinimum: PropTypes.number,
    exclusiveMaximum: PropTypes.number,
    maximum: PropTypes.number,
    maxItems: PropTypes.number,
    maxLength: PropTypes.number,
    maxProperties: PropTypes.number,
    minimum: PropTypes.number,
    minItems: PropTypes.number,
    minLength: PropTypes.number,
    minProperties: PropTypes.number,
    multipleOf: PropTypes.number,
    pattern: PropTypes.string,
    uniqueItems: PropTypes.bool
  })
}
