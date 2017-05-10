import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import ContentContainer from '../ContentContainer/ContentContainer';
import ServiceContainer from '../ServiceContainer/ServiceContainer';

import './Page.scss';

export default class Page extends Component {
  render() {
    const { definition } = this.props;

    if (!definition) {
      return '';
    }

    const navigation = definition.navigation;
    const services = definition.services;
    return (
      <div className="page">
        <Navigation navigation={navigation} location={this.props.location} />
        <div className="page-main">
           <Header
            definitionTitle={definition.title}
            version={definition.version}
          />
          <ContentContainer>
            {services && services.map((service) => {
              return (
                <ServiceContainer
                  key={service.title}
                  service={service}
                />
              );
            })}
          </ContentContainer>
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  definition: PropTypes.object
};
