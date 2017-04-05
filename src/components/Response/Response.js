import React, { Component } from 'react';

import BodySchema from '../BodySchema/BodySchema';

import ResponseRecord from '../../records/ResponseRecord';

// import './Response.scss';

export default class Response extends Component {
  render() {
    const { response } = this.props;
    return (
      <div className="response">
        <div className="response-info">
          <span>{response.get('code')}</span>
          <div className="response-description">{response.get('description')}</div>
        </div>
        <BodySchema properties={response.get('schema')} />
      </div>
    );
  }
}

Response.propTypes = {
  response: React.PropTypes.instanceOf(ResponseRecord)
};
