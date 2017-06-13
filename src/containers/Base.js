import React, { Component } from 'react'
import { configureAnchors } from 'react-scrollable-anchor'
import DocumentTitle from 'react-document-title'
import PropTypes from 'prop-types'

import Page from '../components/Page/Page'
import { getDefinition, parseDefinition } from '../lib/definitions'
import '../general.scss'

export default class Base extends Component {
  state = {
    parserType: 'open-api-v3',
    definition: null,
    parsedDefinition: null
  }

  setDefinition = async ({ openApiUrl, parserType = this.state.parserType }) => {
    const definition = await getDefinition(openApiUrl)
    const parsedDefinition = await parseDefinition(definition, parserType)

    this.setState({ definition, parsedDefinition, parserType })
  }

  async componentDidMount () {
    const openApiUrl = this.props.location.query.url
    const parserType = this.state.parserType

    await this.setDefinition({ openApiUrl, parserType })

    configureAnchors({ offset: -10, scrollDuration: 100 })
  }

  render () {
    const { parsedDefinition: definition, location } = this.state
    const specUrl = location.query.url

    // TODO: add input to add a url
    return (
      <DocumentTitle title={definition ? definition.title : 'Open API v3 renderer'}>
        <div className='main'>
          {!definition && "Welcome to Temando's new Open API Renderer. Watch this space!"}
          {definition && <Page definition={definition} location={location} specUrl={specUrl} />}
        </div>
      </DocumentTitle>
    )
  }
}

Base.contextTypes = {
  router: PropTypes.object
}

Base.propTypes = {
  location: PropTypes.object
}
