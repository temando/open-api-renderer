import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class NumericProperty extends PureComponent {
  render() {
    const { constraints } = this.props;

    if (!constraints) {
      return null;
    }

    const { exclusiveMinimum, exclusiveMaximum, maximum, minimum, multipleOf } = constraints;
    const validations = [];

    if (multipleOf) {
      validations.push(`multiple of ${multipleOf}`);
    }

    // We're following JSON-Schema Draft 6, which states that exclusive* are
    // integers, not boolean values. Also using `undefined` to prevent edge
    // cases where the value is 0 or 1.
    if (maximum !== undefined && minimum !== undefined) {
      validations.push(`${minimum}…${maximum}`);
    } else if (exclusiveMaximum !== undefined && exclusiveMinimum !== undefined) {
      validations.push(`${exclusiveMinimum}…${exclusiveMaximum}`);
    } else if (minimum !== undefined) {
      validations.push(`≥ ${minimum}`);
    } else if (maximum !== undefined) {
      validations.push(`≤ ${maximum}`);
    } else if (exclusiveMinimum !== undefined) {
      validations.push(`> ${exclusiveMinimum}`);
    } else if (exclusiveMaximum !== undefined) {
      validations.push(`< ${exclusiveMaximum}`);
    }

    if (!validations.length) {
      return null;
    }

    return (
      <span>
        {validations.map(constraint =>
          <span key={constraint} className="numeric-constraints">{constraint}</span>
        )}
      </span>
    );
  }
}

NumericProperty.propTypes = {
  constraints: PropTypes.shape({
    exclusiveMinimum: PropTypes.number,
    exclusiveMaximum: PropTypes.number,
    maximum: PropTypes.number,
    minimum: PropTypes.number,
    multipleOf: PropTypes.number
  })
};
