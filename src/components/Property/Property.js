import React, { Component } from 'react';

import './Property.scss';

export default class Property extends Component {
  render() {
    const { name, type, description, required } = this.props;
    return (
      <div className="property">
        <div className="property-name"><span>{name}</span></div>
        <div className="property-info">
          <span>{type}</span>
          {required && <span className="property-required">Required</span>}
          <div className="property-description">{description}</div>
        </div>
      </div>
    );
  }
}

Property.propTypes = {
  name: React.PropTypes.string,
  type: React.PropTypes.string,
  description: React.PropTypes.string,
  required: React.PropTypes.bool
};
