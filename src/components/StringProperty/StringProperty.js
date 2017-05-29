import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class StringProperty extends PureComponent {
  render() {
    const { constraints } = this.props;

    if (!constraints) {
      return null;
    }

    const { pattern, minLength, maxLength } = constraints;
    const validations = [];

    if (pattern) {
      validations.push(`/${pattern}/`);
    }

    if (maxLength !== undefined && minLength !== undefined) {
      // Be succint if the minLength is the same maxLength
      // ie. value can only be of `x` length.
      if (maxLength === minLength) {
        validations.push(`${minLength} chars`);
      } else {
        validations.push(`${minLength}-${maxLength} chars`);
      }
    } else if (minLength !== undefined) {
      validations.push(`at least ${minLength} chars`);
    } else if (maxLength !== undefined) {
      validations.push(`at most ${maxLength} chars`);
    }

    if (!validations.length) {
      return null;
    }

    return (
      <span>
        {validations.map(constraint =>
          <span key={constraint} className="string-constraints">{constraint}</span>
        )}
      </span>
    );
  }
}

StringProperty.propTypes = {
  constraints: PropTypes.shape({
    pattern: PropTypes.string,
    maxLength: PropTypes.number,
    minLength: PropTypes.number
  })
};
