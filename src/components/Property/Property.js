import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import ArrayProperty from '../ArrayProperty/ArrayProperty';
import Description from '../Description/Description';
import Indicator from '../Indicator/Indicator';
import NumericProperty from '../NumericProperty/NumericProperty';
import ObjectProperty from '../ObjectProperty/ObjectProperty';
import StringProperty from '../StringProperty/StringProperty';

import './Property.scss';

export default class Property extends Component {
  render() {
    const {
      name, type, description, constraints, isRequired, enumValues, defaultValue, onClick, isOpen, isLast
    } = this.props;

    let subtype;
    if (type.includes('array')) {
      subtype = this.props.subtype;
    }

    let isClickable = false;
    if (isOpen !== undefined) {
      isClickable = true;
    }

    let status;
    if (isOpen) {
      status = 'open';
    }

    return (
      <tr
        className={classNames('property', {
          last: isLast
        })}
        onClick={onClick}
      >
        <td className={classNames('property-name', {
          'property--isclickable': isClickable
        })}>
          <span>{name}</span>
          {isClickable &&
          <Indicator className="property-indicator" status={status}/>
          }
        </td>
        <td className="property-info">
          <span className="property-type">
            {!subtype ? type.join(', ') : <span className="property-subtype">{subtype}[]</span>}
            {!subtype && constraints && constraints.format &&
              <span className="property-format">&lt;{constraints.format}&gt;</span>}
          </span>
          {isRequired && <span className="property-required">Required</span>}
          {['number', 'integer'].some(t => type.includes(t)) && <NumericProperty constraints={constraints} />}
          {type.includes('string') && <StringProperty constraints={constraints} />}
          {type.includes('array') && <ArrayProperty constraints={constraints} />}
          {type.includes('object') && <ObjectProperty constraints={constraints} />}
          {enumValues && this.renderEnumValues(enumValues)}
          {defaultValue !== undefined && this.renderDefaultValue(defaultValue)}
          {description && <Description description={description}/>}
        </td>
      </tr>
    );
  }

  /**
   * Render enum values
   *
   * @param {Array} values
   */
  renderEnumValues(values) {
    return (
      <div>
        <span>Valid values:</span>
        {values.map(value => {
          return (
            <span key={value} className="enum">{value}</span>
          );
        })}
      </div>
    );
  }

  renderDefaultValue(value) {
    let displayValue;

    if (typeof value === 'number' || typeof value === 'string') {
      displayValue = value;
    } else if (typeof value === 'boolean') {
      displayValue = value.toString();
    } else if (Array.isArray(value)) {
      displayValue = `[${value.join(', ')}]`;
    }

    return (
      <div>
        <span>Default: </span>
        <span className="default">{displayValue}</span>
      </div>
    );
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
};
