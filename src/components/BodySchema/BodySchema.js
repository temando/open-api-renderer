import React, { Component } from 'react';

import Property from 'components/Property/Property';

// import './BodySchema.scss';

export default class BodySchema extends Component {
  render() {
    const { properties } = this.props;
    return (
      <div className="body">
        {properties.map((property) => {
          if (property.get('type') === 'object') {
            return <BodySchema properties={property} />
          } else {
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
        }).toArray()}
      </div>
    );
  }
}

BodySchema.propTypes = {
  properties: React.PropTypes.object // or array?
};
