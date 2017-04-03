import React, { Component } from 'react';
import classNames from 'classnames';

import Property from 'components/Property/Property';

import './BodySchema.scss';

export default class BodySchema extends Component {
  constructor(props) {
    super(props);

    this.renderTabs = this.renderTabs.bind(this);
    this.renderSchema = this.renderSchema.bind(this);
    this.renderExample = this.renderExample.bind(this);

    this.state = {
      tab: 'schema'
    };
  }

  render() {
    const { properties, example } = this.props;
    const { tab } = this.state;
    return (
      <div className="body">
        {example && this.renderTabs()}
        {tab === 'schema' && this.renderSchema(properties)}
        {tab === 'example' && this.renderExample(example)}
      </div>
    );
  }

  renderTabs() {
    const { tab } = this.state;
    return (
      <div className="body-tabs">
        <div
          role="button"
          onClick={() => this.setState({ tab: 'schema'})}
          className={classNames({
            'active': (tab === 'schema')
          })}
        >
          Schema
        </div>
        <div
          role="button"
          onClick={() => this.setState({ tab: 'example'})}
          className={classNames({
            'active': (tab === 'example')
          })}
        >
          Example
        </div>
      </div>
    );
  }

  renderSchema(properties) {
    return (
      <div className="body-schema">
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

  renderExample(example) {
    return (
      <div className="body-example">
        {example}
      </div>
    );
  }
}

BodySchema.propTypes = {
  properties: React.PropTypes.object,
  example: React.PropTypes.string
};
