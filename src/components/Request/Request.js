import React, { Component } from 'react';

import BodySchema from 'components/BodySchema/BodySchema';

// import './Request.scss';

export default class Request extends Component {
  render() {
    const { description, schema } = this.props;
    return (
      <div className="request">
        <div className="request-description">{description}</div>
        <BodySchema properties={schema} />
      </div>
    );
  }
}

Request.propTypes = {
  description: React.PropTypes.string,
  schema: React.PropTypes.object
};
