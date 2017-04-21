import React, { Component } from 'react';
import { Element } from 'react-scroll';
import PropTypes from 'prop-types';

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
    const parameters = method.get('parameters');
    const request = method.get('request');
    const responses = method.get('responses');
    return (
      <Element className="method" name={method.get('link')}>
        <h3>{method.get('summary')}</h3>
        <div className="method-description">{method.get('description')}</div>
        {parameters && this.renderParameters(parameters)}
        {request && this.renderRequest(request)}
        {responses && this.renderResponses(responses)}
      </Element>
    );
  }

  renderParameters(parameters) {
    return (
      <div className="method-parameters">
        <h4>Parameters</h4>
        {parameters.get('query') &&
        <BodySchema properties={parameters.get('query')}/>
        }
        {parameters.get('path') &&
        <BodySchema properties={parameters.get('path')}/>
        }
      </div>
    );
  }

  renderRequest(request) {
    const description = request.get('description');
    const schema = request.get('schema');
    const example = request.get('example');

    return (
      <div className="method-request">
        <h4>Request</h4>
        <BodyContent description={description} schema={schema} example={example}/>
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
  method: PropTypes.object
};
