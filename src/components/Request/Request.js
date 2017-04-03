import React, { Component } from 'react';

import BodySchema from 'components/BodySchema/BodySchema';

// import './Request.scss';

export default class Request extends Component {
  render() {
    const { request } = this.props;
    return (
      <div className="request">
        <div className="request-description">{request.get('description')}</div>
        <BodySchema properties={request.get('schema')} example={request.get('example')} />
      </div>
    );
  }
}

Request.propTypes = {
  request: React.PropTypes.object
};
