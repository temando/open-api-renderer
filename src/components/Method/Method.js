import React, { Component } from 'react';

import BodySchema from 'components/BodySchema/BodySchema';
import Request from 'components/Request/Request';
import Response from 'components/Response/Response';

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
    const parameters = method.get('parameters');
    const request = method.get('request');
    const responses = method.get('responses');
    return (
      <div className="method">
        <h3>{method.get('summary')}</h3>
        <div className="method-description">{method.get('description')}</div>
        {parameters && this.renderParameters(parameters)}
        {request && this.renderRequest(request)}
        {responses && this.renderResponses(responses)}
      </div>
    );
  }

  renderParameters(parameters) {
    return (
      <div className="method-parameters">
        <h4>Parameters</h4>
        {parameters.get('query') &&
          <BodySchema properties={parameters.get('query')} />
        }
        {parameters.get('path') &&
          <BodySchema properties={parameters.get('path')} />
        }
      </div>
    );
  }

  renderRequest(request) {
    return (
      <div className="method-request">
        <h4>Request</h4>
        <Request 
          request={request}
        />
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
        }).toArray()}
      </div>
    );
  }
}

Method.propTypes = {
  method: React.PropTypes.object
};
