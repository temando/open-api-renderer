import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ArrayProperty extends PureComponent {
  render() {
    const { constraints } = this.props;

    if (!constraints) {
      return null;
    }

    const { minItems, maxItems, uniqueItems } = constraints;
    const validations = [];

    if (uniqueItems) {
      validations.push('items must be unique');
    }

    if (maxItems !== undefined && minItems !== undefined) {
      // Be succint if the minItems is the same maxItems
      // ie. value can only be of `x` length.
      if (maxItems === minItems) {
        validations.push(`${minItems} items`);
      } else {
        validations.push(`${minItems}-${maxItems} items`);
      }
    } else if (minItems !== undefined) {
      validations.push(`at least ${minItems} items`);
    } else if (maxItems !== undefined) {
      validations.push(`at most ${maxItems} items`);
    }

    if (!validations.length) {
      return null;
    }

    return (
      <span>
        {validations.map(constraint =>
          <span key={constraint} className="array-constraints">{constraint}</span>
        )}
      </span>
    );
  }
}

ArrayProperty.propTypes = {
  constraints: PropTypes.shape({
    maxItems: PropTypes.number,
    minItems: PropTypes.number,
    uniqueItems: PropTypes.bool
  })
};
