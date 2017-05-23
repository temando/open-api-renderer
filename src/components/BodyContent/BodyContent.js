import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import BodySchema from '../BodySchema/BodySchema';
import Example from '../Example/Example';

import './BodyContent.scss';

export default class BodyContent extends Component {
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
    const { schema, example, examples } = this.props;

    const { tab } = this.state;
    return (
      <div className="body-content">
        {schema && this.renderTabs(schema, example || examples)}
        {tab === 'schema' && this.renderSchema(schema)}
        {tab === 'example' && this.renderExample(example, examples)}
      </div>
    );
  }

  renderTabs(includeSchema, includeExample) {
    const currentTab = this.state.tab;
    return (
      <div className="body-content-tabs">
        {includeSchema && this.renderSchemaTab(currentTab)}
        {includeExample && this.renderExampleTab(currentTab)}
      </div>
    );
  }

  renderSchemaTab(currentTab) {
    return (
      <div
        role="button"
        onClick={() => this.setState({ tab: 'schema' })}
        className={classNames({
          active: (currentTab === 'schema')
        })}
      >
        Schema
      </div>
    );
  }

  renderExampleTab(currentTab) {
    return (
      <div
        role="button"
        onClick={() => this.setState({ tab: 'example' })}
        className={classNames({
          active: (currentTab === 'example')
        })}
      >
        Example
      </div>
    );
  }

  renderSchema(schema) {
    if (schema) {
      return (
        <BodySchema properties={schema} styleVariation="odd"/>
      );
    }
    return null;
  }

  renderExample(example, examples) {
    return (
      <Example example={example} examples={examples}/>
    );
  }
}

BodyContent.propTypes = {
  schema: PropTypes.array,
  example: PropTypes.string,
  examples: PropTypes.array
};
