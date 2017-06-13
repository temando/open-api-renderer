import React, { Component } from 'react'
import { configureAnchors } from 'react-scrollable-anchor'
import DocumentTitle from 'react-document-title'
import PropTypes from 'prop-types'
import { parse as parseQuery } from 'qs'

import Page from '../components/Page/Page'
import { getDefinition, parseDefinition } from '../lib/definitions'
import '../general.scss'

export default class Base extends Component {
  state = {
    parserType: 'open-api-v3',
    definitionUrl: null,
    definition: null,
    parsedDefinition: null
  }

  setDefinition = async ({ definitionUrl, parserType = this.state.parserType }) => {
    const definition = await getDefinition(definitionUrl)
    const parsedDefinition = await parseDefinition(definition, parserType)

    this.setState({ definitionUrl, definition, parsedDefinition, parserType })
  }

  async componentDidMount () {
    const { location } = this.props
    const { parserType } = this.state

    const definitionUrl = parseQuery(location.search.split('?')[1]).url

    await this.setDefinition({ definitionUrl, parserType })

    configureAnchors({ offset: -10, scrollDuration: 100 })
  }

  render () {
    const { parsedDefinition: definition, definitionUrl } = this.state
    const { location } = this.props

    // TODO: add input to add a url
    return (
      <DocumentTitle title={definition ? definition.title : 'Open API v3 renderer'}>
        <div className='main'>
          {!definition && "Welcome to Temando's new Open API Renderer. Watch this space!"}
          {definition && <Page definition={definition} location={location} specUrl={definitionUrl} />}
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
