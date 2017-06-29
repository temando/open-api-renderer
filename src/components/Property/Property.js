import React, { PureComponent } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Description from '../Description/Description'
import Indicator from '../Indicator/Indicator'
import PropertyConstraints from './PropertyConstraints/PropertyConstraints'
import { styles } from './Property.styles'

@styles
export default class Property extends PureComponent {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    if (this.props.onClick) {
      this.props.onClick(this.props.name)
    }
  }

  render () {
    const {
      name, type, title, description, constraints, isRequired,
      enumValues, defaultValue, onClick, isOpen, isLast,
      classes
    } = this.props

    const isClickable = onClick !== undefined

    let subtype
    if (type.includes('array')) {
      subtype = this.props.subtype
    }

    let indicatorDirection
    if (isOpen) {
      indicatorDirection = 'up'
    } else {
      indicatorDirection = 'down'
    }

    return (
      <tr
        className={classNames(classes.property, {
          [classes.last]: isLast
        })}
        onClick={this.handleClick}
      >
        <td className={classNames(classes.name, {
          [classes.isClickable]: isClickable
        })}>
          <span>{name}</span>
          {isClickable && <Indicator className={classes.indicator} direction={indicatorDirection} />}
        </td>
        <td className={classes.info}>
          {title && <span className={classes.title}>{title}</span>}
          <span className={classes.type}>
            {!subtype ? type.join(', ') : <span className={classes.subType}>{subtype}[]</span>}
            {!subtype && constraints && constraints.format &&
            <span className={classes.format}>&lt;{constraints.format}&gt;</span>}
          </span>
          <PropertyConstraints constraints={constraints} type={type} isRequired={isRequired} />
          {(enumValues || defaultValue || description) &&
            <div className={classes.additionalInfo}>
              {enumValues && this.renderEnumValues(enumValues)}
              {defaultValue !== undefined && this.renderDefaultValue(defaultValue)}
              {description && <div><Description isInline description={description} /></div>}
            </div>
          }
        </td>
      </tr>
    )
  }

  /**
   * Render enum values
   *
   * @param {Array} values
   */
  renderEnumValues (values) {
    const { classes } = this.props

    return (
      <div>
        <span>Valid values:</span>
        {values.map(value => {
          return (
            <span key={value} className={classes.enum}>{value}</span>
          )
        })}
      </div>
    )
  }

  renderDefaultValue (value) {
    let displayValue

    if (typeof value === 'number' || typeof value === 'string') {
      displayValue = value
    } else if (typeof value === 'boolean') {
      displayValue = value.toString()
    } else if (Array.isArray(value)) {
      displayValue = `[${value.join(', ')}]`
    }

    return (
      <div className='default'>
        Default: <span>{displayValue}</span>
      </div>
    )
  }
}

Property.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.arrayOf(PropTypes.string).isRequired,
  subtype: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
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
  }),
  enumValues: PropTypes.array,
  defaultValue: PropTypes.any,
  isRequired: PropTypes.bool,
  isOpen: PropTypes.bool,
  isLast: PropTypes.bool,
  onClick: PropTypes.func,
  classes: PropTypes.object
}
