import React, { Component } from 'react';
import { Element } from 'react-scroll';
import PropTypes from 'prop-types';
import ScrollableAnchor from 'react-scrollable-anchor';

import BodySchema from '../BodySchema/BodySchema';
import BodyContent from '../BodyContent/BodyContent';
import Response from '../Response/Response';

import './Method.scss';

export default class Method extends Component {
  constructor(props) {
    super(props);

    this.renderParameters = this.renderParameters.bind(this);
    this.renderRequest = this.renderRequest.bind(this);
    this.renderResponses = this.renderResponses.bind(this);
  }

  render() {
    const { method } = this.props;
    const parameters = method.parameters;
    const request = method.request;
    const responses = method.responses;
    return (
      <ScrollableAnchor id={method.link}>
        <Element className="method" name={method.link}>
          <h3>{method.summary}</h3>
          <div className="method-description">{method.description}</div>
          {parameters && this.renderParameters(parameters)}
          {request && this.renderRequest(request)}
          {responses && this.renderResponses(responses)}
        </Element>
      </ScrollableAnchor>
    );
  }

  renderParameters(parameters) {
    return (
      <div className="method-parameters">
        <h4>Parameters</h4>
        {parameters.query &&
        <BodySchema properties={parameters.query}/>
        }
        {parameters.path &&
        <BodySchema properties={parameters.path}/>
        }
      </div>
    );
  }

  renderRequest(request) {
    const { description, schema, example, examples } = request;

    return (
      <div className="method-request">
        <h4>Request</h4>
        <BodyContent description={description} schema={schema} example={example} examples={examples}/>
      </div>
    );
  }

  renderResponses(responses) {
    return (
      <div className="method-responses">
        <h4>Responses</h4>
        {responses.map((response) => {
          return (
            <Response
              key={response.code}
              response={response}
            />
          );
        })}
      </div>
    );
  }
}

Method.propTypes = {
  method: PropTypes.object
};
