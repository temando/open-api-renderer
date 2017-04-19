import React, { Component } from 'react';
import { Element } from 'react-scroll';
import PropTypes from 'prop-types';

import Method from '../Method/Method';

// import './ServiceContainer.scss';

export default class ServiceContainer extends Component {
  render() {
    const { service } = this.props;
    const methods = service.get('methods');
    const title = service.get('title');
    return (
      <Element className="service-container" name={title} id={title}>
        <h2>{title}</h2>
        {methods.map((method) => {
          return (
            <Method
              key={method.get('type')}
              method={method}
            />
          );
        }).toArray()}
      </Element>
    );
  }
}

ServiceContainer.propTypes = {
  service: PropTypes.object
};
