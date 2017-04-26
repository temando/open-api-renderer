import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BodyContent from '../BodyContent/BodyContent';

// import './Response.scss';

export default class Response extends Component {
  render() {
    const { response } = this.props;
    const { code, description, schema, example } = response;

    return (
      <div className="response">
        <div className="response-info">
          <span>{code}</span>
        </div>
        <BodyContent description={description} schema={schema} example={example}/>
      </div>
    );
  }
}

Response.propTypes = {
  response: PropTypes.object
};
