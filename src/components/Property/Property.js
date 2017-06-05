import React, { PureComponent } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Description from '../Description/Description'
import Indicator from '../Indicator/Indicator'
import PropertyConstraints from '../PropertyConstraints/PropertyConstraints'

import './Property.scss'

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
      name, type, title, description, constraints, isRequired, enumValues, defaultValue, onClick, isOpen, isLast
    } = this.props

    const isClickable = onClick !== undefined

    let subtype
    if (type.includes('array')) {
      subtype = this.props.subtype
    }

    let status
    if (isOpen) {
      status = 'open'
    }

    return (
      <tr
        className={classNames('property', {
          last: isLast
        })}
        onClick={this.handleClick}
      >
        <td className={classNames('property-name', {
          'property--isclickable': isClickable
        })}>
          <span>{name}</span>
          {isClickable && <Indicator className='property-indicator' status={status} />}
        </td>
        <td className='property-info'>
          {title && <span className='property-title'>{title}</span>}
          <span className='property-type'>
            {!subtype ? type.join(', ') : <span className='property-subtype'>{subtype}[]</span>}
            {!subtype && constraints && constraints.format &&
              <span className='property-format'>&lt;{constraints.format}&gt;</span>}
          </span>
          <PropertyConstraints constraints={constraints} type={type} isRequired={isRequired} />
          {enumValues && this.renderEnumValues(enumValues)}
          {defaultValue !== undefined && this.renderDefaultValue(defaultValue)}
          {description && <Description description={description} />}
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
    return (
      <div>
        <span>Valid values:</span>
        {values.map(value => {
          return (
            <span key={value} className='enum'>{value}</span>
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
  onClick: PropTypes.func
}
