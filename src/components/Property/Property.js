import React, { PureComponent } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Docs from '../Docs/Docs'
import Description from '../Description/Description'
import Indicator from '../Indicator/Indicator'
import PropertyConstraints from './PropertyConstraints/PropertyConstraints'
import { styles } from './Property.styles'

@styles
export default class Property extends PureComponent {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.displayAllEnums = this.displayAllEnums.bind(this)
  }

  componentWillMount () {
    let {name, enumValues} = this.props
    let trimmedEnumValues = enumValues
    let isEnumTrimmed = false

    if (enumValues) {
      // If enumValues only has one single value, append the single value to name, and not display enum values
      if (enumValues.length === 1) {
        name = `${name} = "${enumValues[0]}"`
        enumValues = trimmedEnumValues = null
      } else if (enumValues.length > 20) {
        trimmedEnumValues = enumValues.slice(0, 20)
        isEnumTrimmed = true
      }
    }

    this.setState({
      name,
      enumValues,
      trimmedEnumValues,
      isEnumTrimmed
    })
  }

  handleClick () {
    if (this.props.onClick) {
      this.props.onClick(this.props.name)
    }
  }

  render () {
    const {
      type, title, description, constraints, docs, defaultValue, attributes,
      isRequired, isOpen, isLast, onClick, classes
    } = this.props

    const {name, isEnumTrimmed} = this.state
    let enumValues

    if (isEnumTrimmed) {
      enumValues = this.state.trimmedEnumValues
    } else {
      enumValues = this.state.enumValues
    }

    const isClickable = onClick !== undefined
    const isAdditional = attributes && attributes.isAdditionalProperties === true

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
          [classes.last]: isLast,
          [classes.additionalProperties]: isLast
        })}
        onClick={this.handleClick}
      >
        <td className={classNames(classes.name, {
          [classes.isClickable]: isClickable,
          [classes.isAdditional]: isAdditional
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
          {((enumValues && enumValues.length) || defaultValue || description) &&
          <div className={classes.additionalInfo}>
            {enumValues && this.renderEnumValues(enumValues, isEnumTrimmed)}
            {defaultValue !== undefined && this.renderDefaultValue(defaultValue)}
            {description && <div><Description isInline description={description} /></div>}
            {docs && <Docs {...docs} />}
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
   * @param {boolean} isEnumTrimmed
   */
  renderEnumValues (values, isEnumTrimmed) {
    const {classes} = this.props

    return (
      <div>
        <span>Valid values:</span>
        {values.map(value => {
          return (
            <span key={value} className={classes.enum}>{value}</span>
          )
        })}
        {isEnumTrimmed &&
        <a onClick={this.displayAllEnums}>...</a>
        }
      </div>
    )
  }

  displayAllEnums () {
    this.setState(
      {
        isEnumTrimmed: false
      }
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
  classes: PropTypes.object,
  attributes: PropTypes.object
}
