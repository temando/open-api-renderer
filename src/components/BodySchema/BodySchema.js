import React, { Component } from 'react';
import createFragment from 'react-addons-create-fragment';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Property from 'components/Property/Property';

import './BodySchema.scss';

export default class BodySchema extends Component {
  constructor(props) {
    super(props);

    this.renderPropertyRow = this.renderPropertyRow.bind(this);
    this.renderSubsetProperties = this.renderSubsetProperties.bind(this);

    this.state = {
      expandedProp: null
    };
  }

  render() {
    const { properties } = this.props;
    return (
      <table className="body-schema">
        <tbody>
          {properties.map((property) => {
            if (property.get('type') === 'object' && this.state.expandedProp === property.get('name')) {
              return createFragment({
                property: this.renderPropertyRow(property, true),
                subset: this.renderSubsetProperties(property)
              });
            } else if (property.get('type') === 'object') {
              return this.renderPropertyRow(property, false);
            } else {
              return this.renderPropertyRow(property);
            }
          }).toArray()}
        </tbody>
      </table>
    );
  }

  renderPropertyRow(property, isOpen) {
    return (
      <Property
        key={property.get('name')}
        name={property.get('name')}
        type={property.get('type')}
        description={property.get('description')}
        required={property.get('required')}
        onClick={this.onClick.bind(this, property.get('name'))}
        isOpen={isOpen}
      />
    );
  }

  renderSubsetProperties(property) {
    return (
      <tr className="body-schema-subset">
        <td colSpan="100">
          <ReactCSSTransitionGroup
            transitionName="schema-slide-toggle"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
          >
            <BodySchema
              key={`${property.get('name')}-properties`}
              properties={property.get('properties')}
            />
          </ReactCSSTransitionGroup>
        </td>
      </tr>
    );
  }

  onClick(propertyName) {
    if (this.state.expandedProp === propertyName) {
      this.setState({ expandedProp: null });
    } else {
      this.setState({ expandedProp: propertyName });
    }
  }
}

BodySchema.propTypes = {
  properties: React.PropTypes.object
};
