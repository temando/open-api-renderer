import React, { Component } from 'react';
import { Element } from 'react-scroll';
import PropTypes from 'prop-types';

import Method from '../Method/Method';

// import './ServiceContainer.scss';

export default class ServiceContainer extends Component {
  render() {
    const { service } = this.props;
    const methods = service.methods;
    const title = service.title;

    return (
      <Element className="service-container" name={title} id={title}>
        <h2>{title}</h2>
        {methods.map((method) => {
          return (
            <Method
              key={method.link}
              method={method}
            />
          );
        })}
      </Element>
    );
  }
}

ServiceContainer.propTypes = {
  service: PropTypes.object
};
