import React, { Component } from 'react';
import createFragment from 'react-addons-create-fragment';

import Property from 'components/Property/Property';

import './BodySchema.scss';

export default class BodySchema extends Component {
  constructor(props) {
    super(props);

    this.renderPropertyRow = this.renderPropertyRow.bind(this);
    this.renderSubsetProperties = this.renderSubsetProperties.bind(this);
  }

  render() {
    const { properties } = this.props;
    return (
      <table className="body-schema">
        <tbody>
          {properties.map((property) => {
            if (property.get('type') === 'object') {
              return createFragment({
                property: this.renderPropertyRow(property),
                subset: this.renderSubsetProperties(property)
              });
            } else {
              return this.renderPropertyRow(property);
            }
          }).toArray()}
        </tbody>
      </table>
    );
  }

  renderPropertyRow(property) {
    return (
      <Property
        key={property.get('name')}
        name={property.get('name')}
        type={property.get('type')}
        description={property.get('description')}
        required={property.get('required')}
      />
    );
  }

  renderSubsetProperties(property) {
    return (
      <tr className="body-schema-subset">
        <td colSpan="100">
          <BodySchema
            key={`${property.get('name')}-properties`}
            properties={property.get('properties')}
          />
        </td>
      </tr>
    );
  }
}

BodySchema.propTypes = {
  properties: React.PropTypes.object
};
