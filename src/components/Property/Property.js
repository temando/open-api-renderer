import React, { Component } from 'react';

import './Property.scss';

export default class Property extends Component {
  render() {
    const { name, type, description, required } = this.props;
    return (
      <tr className="property">
        <td className="property-name"><span>{name}</span></td>
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
  required: React.PropTypes.bool
};
