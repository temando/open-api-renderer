import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Description from '../Description/Description';
import Indicator from '../Indicator/Indicator';

import './Property.scss';

export default class Property extends Component {
  render() {
    const { name, type, description, required, enumValues, defaultValue, onClick, isOpen, isLast } = this.props;

    let subtype;
    if (type === 'array') {
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
          <span>{type}</span>{subtype && <span> of {subtype}</span>}
          {required && <span className="property-required">Required</span>}
          {enumValues && this.renderEnumValues(enumValues)}
          {defaultValue && this.renderDefaultValue(defaultValue)}
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
  name: PropTypes.string,
  type: PropTypes.string,
  subtype: PropTypes.string,
  description: PropTypes.string,
  required: PropTypes.bool,
  enumValues: PropTypes.array,
  defaultValue: PropTypes.any,
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
  isLast: PropTypes.bool
};
