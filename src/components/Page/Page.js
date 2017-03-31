import React, { Component } from 'react';

import Navigation from 'components/Navigation/Navigation';
import ContentContainer from 'components/ContentContainer/ContentContainer';
import ServiceContainer from 'components/ServiceContainer/ServiceContainer';

import './Page.scss';

export default class Page extends Component {
  render() {
    const { definition } = this.props;
    const navigation = definition.get('navigation');
    const services = definition.get('services');
    return (
      <div className="page">
        <Navigation navigation={navigation} />
        <ContentContainer>
          {services.map((service) => {
            return (
              <ServiceContainer
                key={service.get('title')}
                service={service}
              />
            );
          }).toArray()}
        </ContentContainer>
      </div>
    );
  }
}

Page.propTypes = {
  definition: React.PropTypes.object
};
