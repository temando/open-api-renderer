import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  response: PropTypes.instanceOf(ResponseRecord)
};
