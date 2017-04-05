import React, { Component } from 'react';
import classNames from 'classnames';

import BodySchema from '../BodySchema/BodySchema';

import './Request.scss';

export default class Request extends Component {
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
    const { request } = this.props;
    const schema = request.get('schema');
    const example = request.get('example');
    const { tab } = this.state;
    return (
      <div className="request">
        <div className="request-description">{request.get('description')}</div>
        {example && this.renderTabs()}
        {tab === 'schema' && this.renderSchema(schema)}
        {tab === 'example' && this.renderExample(example)}
      </div>
    );
  }

  renderTabs() {
    const { tab } = this.state;
    return (
      <div className="request-tabs">
        <div
          role="button"
          onClick={() => this.setState({ tab: 'schema'})}
          className={classNames({
            active: (tab === 'schema')
          })}
        >
          Schema
        </div>
        <div
          role="button"
          onClick={() => this.setState({ tab: 'example'})}
          className={classNames({
            active: (tab === 'example')
          })}
        >
          Example
        </div>
      </div>
    );
  }

  renderSchema(schema) {
    return (
      <BodySchema properties={schema} />
    );
  }

  renderExample(example) {
    return (
      <div className="request-example">
        {example}
      </div>
    );
  }
}

Request.propTypes = {
  request: React.PropTypes.object
};
