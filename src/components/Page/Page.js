import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import ContentContainer from '../ContentContainer/ContentContainer'
import ServiceContainer from '../ServiceContainer/ServiceContainer'

import './Page.scss'

export default class Page extends Component {
  render () {
    const { definition, location, specUrl } = this.props

    if (!definition) {
      return null
    }

    const { navigation, services } = definition

    return (
      <div className='page'>
        <Navigation navigation={navigation} location={location} />
        <div className='page-main'>
          <Header
            title={definition.title}
            description={definition.description}
            version={definition.version}
            specUrl={specUrl}
          />
          <ContentContainer>
            {services && services.map(
              (service) =>
                <ServiceContainer key={service.title} service={service} />
            )}
          </ContentContainer>
        </div>
      </div>
    )
  }
}

Page.propTypes = {
  definition: PropTypes.object,
  location: PropTypes.object,
  specUrl: PropTypes.string
}
