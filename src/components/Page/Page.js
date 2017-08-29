import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import NavigationIcon from '../NavigationIcon/NavigationIcon'
import ContentContainer from '../ContentContainer/ContentContainer'
import SecurityContainer from '../SecurityContainer/SecurityContainer'
import ServiceContainer from '../ServiceContainer/ServiceContainer'
import { styles } from './Page.styles'

@styles
export default class Page extends Component {
  constructor (props) {
    super(props)

    this.onToggleNavigation = this.onToggleNavigation.bind(this)
    this.onClickNavItem = this.onClickNavItem.bind(this)

    this.state = {
      isNavOpen: false
    }
  }

  render () {
    const { definition, hash, definitionUrl, initialSchemaTreeDepth, classes } = this.props
    const { isNavOpen } = this.state

    if (!definition) {
      return null
    }

    const { navigation, services, security } = definition

    return (
      <div className={classes.page}>
        <NavigationIcon onClick={this.onToggleNavigation} />
        <Navigation navigation={navigation} hash={hash} isNavOpen={isNavOpen} onClickNavItem={this.onClickNavItem} />
        <div className={classNames(classes.main, {
          [classes.isHidden]: isNavOpen
        })}>
          <Header
            title={definition.title}
            description={definition.description}
            version={definition.version}
            info={definition.info}
            definitionUrl={definitionUrl}
          />
          {security && this.renderSecurity(security)}
          <ContentContainer>
            {services && services.map((service) => {
              const serviceWithDocs = Object.assign({}, service, this.findTagDocs(service.title, navigation))

              return (
                <ServiceContainer
                  key={service.title}
                  service={serviceWithDocs}
                  initialSchemaTreeDepth={initialSchemaTreeDepth}
                />
              )
            })}
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
          (id) => <SecurityContainer key={id} id={id} security={security[id]} placedIn='schema' />
        )}
      </ContentContainer>
    )
  }

  findTagDocs (tagHandle, navigation) {
    // Find navigation tag that matches given `tagHandle`, and if has docs.
    // Note: tag.methods is a way to determine if the navigation has tags at all.
    const navigationTag = navigation.find((tag) => (tag.methods && tag.handle === tagHandle && tag.docs))

    // No tag, no additional docs.
    if (!navigationTag) {
      return {}
    }

    return {
      docs: navigationTag.docs
    }
  }

  onToggleNavigation () {
    const { isNavOpen } = this.state
    if (isNavOpen) {
      this.setState({ isNavOpen: false })
    } else {
      this.setState({ isNavOpen: true })
    }
  }

  onClickNavItem () {
    this.setState({ isNavOpen: false })
  }
}

Page.propTypes = {
  definition: PropTypes.shape({
    navigation: PropTypes.arrayOf(PropTypes.object),
    services: PropTypes.arrayOf(PropTypes.object),
    security: PropTypes.object
  }),
  hash: PropTypes.string.isRequired,
  initialSchemaTreeDepth: PropTypes.number,
  definitionUrl: PropTypes.string,
  classes: PropTypes.object
}
