import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ObjectProperty extends PureComponent {
  render() {
    const { constraints } = this.props;

    if (!constraints) {
      return null;
    }

    const { minProperties, maxProperties } = constraints;
    const validations = [];

    if (maxProperties !== undefined && minProperties !== undefined) {
      // Be succint if the minProperties is the same maxProperties
      // ie. value can only be of `x` length.
      if (maxProperties === minProperties) {
        validations.push(`${minProperties} properties`);
      } else {
        validations.push(`${minProperties}-${maxProperties} properties`);
      }
    } else if (minProperties !== undefined) {
      validations.push(`at least ${minProperties} properties`);
    } else if (maxProperties !== undefined) {
      validations.push(`at most ${maxProperties} properties`);
    }

    if (!validations.length) {
      return null;
    }

    return (
      <span>
        {validations.map(constraint =>
          <span key={constraint} className="object-constraints">{constraint}</span>
        )}
      </span>
    );
  }
}

ObjectProperty.propTypes = {
  constraints: PropTypes.shape({
    maxProperties: PropTypes.number,
    minProperties: PropTypes.number
  })
};
