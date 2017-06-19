import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import ContentContainer from '../ContentContainer/ContentContainer'
import SecurityContainer from '../SecurityContainer/SecurityContainer'
import ServiceContainer from '../ServiceContainer/ServiceContainer'

import './Page.scss'

export default class Page extends Component {
  render () {
    const { definition, location, specUrl } = this.props

    if (!definition) {
      return null
    }

    const { navigation, services, security } = definition

    return (
      <div className='page'>
        <Navigation navigation={navigation} location={location} />
        <div className='page-main'>
          <Header
            title={definition.title}
            description={definition.description}
            version={definition.version}
            info={definition.info}
            specUrl={specUrl}
          />
          {security && this.renderSecurity(security)}
          <ContentContainer>
            {services && services.map(
              (service) => <ServiceContainer key={service.title} service={service} />
            )}
          </ContentContainer>
        </div>
      </div>
    )
  }

  renderSecurity (security) {
    return (
      <ContentContainer>
        <h2>Authentication</h2>
        {Object.keys(security).map(
          (id) => <SecurityContainer key={id} id={id} security={security[id]} />
        )}
      </ContentContainer>
    )
  }
}

Page.propTypes = {
  definition: PropTypes.shape({
    navigation: PropTypes.arrayOf(PropTypes.object),
    services: PropTypes.arrayOf(PropTypes.object),
    security: PropTypes.object
  }),
  location: PropTypes.object,
  specUrl: PropTypes.string
}
