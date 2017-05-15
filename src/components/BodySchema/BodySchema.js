import React, { Component } from 'react';
import createFragment from 'react-addons-create-fragment';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Property from '../Property/Property';

import './BodySchema.scss';

export default class BodySchema extends Component {
  constructor(props) {
    super(props);

    this.renderPropertyRow = this.renderPropertyRow.bind(this);
    this.renderSubsetProperties = this.renderSubsetProperties.bind(this);

    this.state = {
      expandedProp: []
    };
  }

  render() {
    const { properties, styleVariation } = this.props;

    if (!properties) {
      return null;
    }

    const { expandedProp } = this.state;
    let iterator = 0;
    return (
      <table className={classNames('body-schema', `body-schema--${styleVariation}`)}>
        <tbody>
          {properties.map((property) => {
            iterator = iterator + 1;
            let isLast = false;
            if (properties.length === iterator) {
              isLast = true;
            }
            if (property.type === 'array' && expandedProp.indexOf(property.name) !== -1 && property.properties !== undefined) {
              return createFragment({
                property: this.renderPropertyRow(property, isLast, true),
                subset: this.renderSubsetProperties(property, true)
              });
            } else if (property.type === 'array' && property.properties !== undefined) {
              return this.renderPropertyRow(property, isLast, false);
            } else if (property.type === 'object' && expandedProp.indexOf(property.name) !== -1 && property.properties !== undefined) {
              return createFragment({
                property: this.renderPropertyRow(property, isLast, true),
                subset: this.renderSubsetProperties(property)
              });
            } else if (property.type === 'object' && property.properties !== undefined) {
              return this.renderPropertyRow(property, isLast, false);
            } else {
              return this.renderPropertyRow(property, isLast);
            }
          })}
        </tbody>
      </table>
    );
  }

  renderPropertyRow(property, isLast, isOpen) {
    return (
      <Property
        key={property.name}
        name={property.name}
        type={property.type}
        subtype={property.subtype}
        description={property.description}
        required={property.required}
        onClick={this.onClick.bind(this, property.name)}
        isOpen={isOpen}
        isLast={isLast}
      />
    );
  }

  renderSubsetProperties(property, isArray = false) {
    const { styleVariation } = this.props;
    let nextStyleVariation = 'even';
    if (styleVariation === 'even') {
      nextStyleVariation = 'odd';
    }
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
            {isArray && <div>Array [</div>}
            <BodySchema
              key={`${property.name}-properties`}
              properties={property.properties}
              styleVariation={nextStyleVariation}
            />
            {isArray && <div>]</div>}
          </ReactCSSTransitionGroup>
        </td>
      </tr>
    );
  }

  onClick(propertyName) {
    const { expandedProp } = this.state;
    if (expandedProp.indexOf(propertyName) !== -1) {
      const newExpanded = expandedProp.filter((prop) => prop !== propertyName);
      this.setState({ expandedProp: newExpanded });
    } else {
      this.setState({ expandedProp: [...expandedProp, propertyName]});
    }
  }
}

BodySchema.propTypes = {
  properties: PropTypes.array,
  styleVariation: PropTypes.oneOf([
    'odd',
    'even'
  ])
};

