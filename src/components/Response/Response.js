import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BodySchema from '../BodySchema/BodySchema';
import BodyContent from '../BodyContent/BodyContent';

// import './Response.scss';

export default class Response extends Component {
  render() {
    const { response } = this.props;
    const { responseCode, description, schema, example } = response;

    return (
      <div className="response">
        <div className="response-info">
          <span>{responseCode}</span>
        </div>
        <BodyContent description={description} schema={schema} example={example}/>
      </div>
    );
  }
}

Response.propTypes = {
  response: PropTypes.object
};
