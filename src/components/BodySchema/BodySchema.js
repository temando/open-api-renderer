import React, { Component } from 'react';
import createFragment from 'react-addons-create-fragment';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';

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
    const { expandedProp } = this.state;
    let iterator = 0;
    return (
      <table className={classNames('body-schema', `body-schema--${styleVariation}`)}>
        <tbody>
          {properties.map((property) => {
            iterator = iterator + 1;
            let isLast = false;
            if (properties.size === iterator) {
              isLast = true;
            }
            if (property.get('type') === 'object' && expandedProp.indexOf(property.get('name')) !== -1) {
              return createFragment({
                property: this.renderPropertyRow(property, isLast, true),
                subset: this.renderSubsetProperties(property)
              });
            } else if (property.get('type') === 'object') {
              return this.renderPropertyRow(property, isLast, false);
            } else {
              return this.renderPropertyRow(property, isLast);
            }
          }).toArray()}
        </tbody>
      </table>
    );
  }

  renderPropertyRow(property, isLast, isOpen) {
    return (
      <Property
        key={property.get('name')}
        name={property.get('name')}
        type={property.get('type')}
        description={property.get('description')}
        required={property.get('required')}
        onClick={this.onClick.bind(this, property.get('name'))}
        isOpen={isOpen}
        isLast={isLast}
      />
    );
  }

  renderSubsetProperties(property) {
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
            <BodySchema
              key={`${property.get('name')}-properties`}
              properties={property.get('properties')}
              styleVariation={nextStyleVariation}
            />
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
  properties: React.PropTypes.object,
  styleVariation: React.PropTypes.oneOf([
    'odd',
    'even'
  ])
};
