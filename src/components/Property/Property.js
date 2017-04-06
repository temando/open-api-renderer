import React, { Component } from 'react';
import classNames from 'classnames';

import Indicator from 'components/Indicator/Indicator';

import './Property.scss';

export default class Property extends Component {
  render() {
    const { name, type, description, required, onClick, isOpen, isLast } = this.props;
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
          'property--isclickable': isClickable,
          'last': isLast
        })}
        onClick={onClick}
      >
        <td className="property-name">
          <span>{name}</span>
          {isClickable &&
            <Indicator className="property-indicator" status={status} />
        }
        </td>
        <td className="property-info">
          <span>{type}</span>
          {required && <span className="property-required">Required</span>}
          {description && <div className="property-description">{description}</div>}
        </td>
      </tr>
    );
  }
}

Property.propTypes = {
  name: React.PropTypes.string,
  type: React.PropTypes.string,
  description: React.PropTypes.string,
  required: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  isOpen: React.PropTypes.bool,
  isLast: React.PropTypes.bool
};
