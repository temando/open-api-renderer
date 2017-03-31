import React, { Component } from 'react';

import Request from 'components/Request/Request';
import Response from 'components/Response/Response';

// import './Method.scss';

export default class Method extends Component {
  render() {
    const { method } = this.props;
    const parameters = method.get('parameters');
    const request = method.get('request');
    const responses = method.get('responses');
    return (
      <div className="method">
        {/*parameters && <Parameters parameters={parameters} />*/}
        {request &&
          <Request 
            description={request.get('description')}
            schema={request.get('schema')}
          />
        }
        {responses && responses.map((response) => {
          return (
            <Response
              key={response.code}
              code={response.code}
              description={response.description}
              schema={response.schema}
              isOk={response.isOk}
            />
          );
        }).toArray()}
      </div>
    );
  }
}

Method.propTypes = {
  //type: React.PropTypes.string, // GET POST PUT DELETE
  //summary: React.PropTypes.string,
  //description: React.PropTypes.string,
  //parameters: React.PropTypes.array,
  //requestBody: React.PropTypes.object,
  //responses: React.PropTypes.array
  method: React.PropTypes.object
};
