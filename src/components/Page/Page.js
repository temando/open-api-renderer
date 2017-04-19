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
    const navigation = definition.get('navigation');
    const services = definition.get('services');
    return (
      <div className="page">
        <Navigation navigation={navigation} />
        <div className="page-main">
           <Header
            definitionTitle={definition.get('title')}
            version={definition.get('version')}
          />
          <ContentContainer>
            {services && services.map((service) => {
              return (
                <ServiceContainer
                  key={service.get('title')}
                  service={service}
                />
              );
            }).toArray()}
          </ContentContainer>
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  definition: PropTypes.object
};
