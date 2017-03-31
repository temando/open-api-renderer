import React, { Component } from 'react';

import Method from 'components/Method/Method';

// import './ServiceContainer.scss';

export default class ServiceContainer extends Component {
  render() {
    const { service } = this.props;
    const methods = service.get('methods');
    return (
      <div className="service-container">
        <h2>{service.get('title')}</h2>
        {methods.map((method) => {
          return (
            <Method
              key={method.get('type')}
              method={method}
            />
          );
        }).toArray()}
      </div>
    );
  }
}

ServiceContainer.propTypes = {
  service: React.PropTypes.object
};
