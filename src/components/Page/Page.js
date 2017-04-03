import React, { Component } from 'react';

import Header from 'components/Header/Header';
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
        <div className="page-main">
           <Header
            definitionTitle={definition.get('title')}
            version={definition.get('version')}
          />
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
      </div>
    );
  }
}

Page.propTypes = {
  definition: React.PropTypes.object
};
