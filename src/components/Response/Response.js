import React, { Component } from 'react';

import BodySchema from 'components/BodySchema/BodySchema';

// import './Response.scss';

export default class Response extends Component {
  render() {
    const { code, description, schema, required } = this.props;
    return (
      <div className="response">
        <div className="response-info">
          <span>{code}</span>
          <div className="response-description">{description}</div>
        </div>
        <BodySchema properties={schema} />
      </div>
    );
  }
}

Response.propTypes = {
  code: React.PropTypes.string,
  description: React.PropTypes.string,
  schema: React.PropTypes.object,
  isOk: React.PropTypes.bool
};
