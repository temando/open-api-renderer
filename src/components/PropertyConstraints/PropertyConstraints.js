import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { getConstraintHints as getArrayHints } from './../../parser/open-api/constraints/array';
import { getConstraintHints as getNumericHints } from './../../parser/open-api/constraints/numeric';
import { getConstraintHints as getObjectHints } from './../../parser/open-api/constraints/object';
import { getConstraintHints as getStringHints } from './../../parser/open-api/constraints/string';

export default class PropertyConstraints extends PureComponent {
  render() {
    const { type, isRequired, constraints } = this.props;

    return (
      <span className="property-constraints">
        {isRequired && <span className="property-required">required</span>}
        {constraints && ['number', 'integer'].some(t => type.includes(t)) && this.renderConstraints(constraints, 'numeric')}
        {constraints && type.includes('string') && this.renderConstraints(constraints, 'string')}
        {constraints && type.includes('array') && this.renderConstraints(constraints, 'array')}
        {constraints && type.includes('object') && this.renderConstraints(constraints, 'object')}
      </span>
    );
  }

  /**
   * Renders validation hints for the given constraints and type.
   *
   * @param {object} constraints
   * @param {string} type
   */
  renderConstraints(constraints, type) {
    let validations = [];

    switch (type) {
    case 'numeric':
      validations = getNumericHints(constraints);
      break;
    case 'object':
      validations = getObjectHints(constraints);
      break;
    case 'array':
      validations = getArrayHints(constraints);
      break;
    case 'string':
    default:
      validations = getStringHints(constraints);
    }

    if (!validations.length) {
      return null;
    }

    return (
      <span>
        {validations.map(constraint =>
          <span key={constraint} className={`${type}-constraints`}>{constraint}</span>
        )}
      </span>
    );
  }
}

PropertyConstraints.propTypes = {
  type: PropTypes.arrayOf(PropTypes.string).isRequired,
  isRequired: PropTypes.bool.isRequired,
  constraints: PropTypes.shape({
    format: PropTypes.string,
    exclusiveMinimum: PropTypes.number,
    exclusiveMaximum: PropTypes.number,
    maximum: PropTypes.number,
    maxItems: PropTypes.number,
    maxLength: PropTypes.number,
    maxProperties: PropTypes.number,
    minimum: PropTypes.number,
    minItems: PropTypes.number,
    minLength: PropTypes.number,
    minProperties: PropTypes.number,
    multipleOf: PropTypes.number,
    pattern: PropTypes.string,
    uniqueItems: PropTypes.bool
  })
};
