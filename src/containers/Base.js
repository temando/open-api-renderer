import React from 'react'
import { configureAnchors } from 'react-scrollable-anchor'
import DocumentTitle from 'react-document-title'
import PropTypes from 'prop-types'

import Page from '../components/Page/Page'
import Overlay from '../components/Overlay/Overlay'
import { getDefinition, parseDefinition } from '../lib/definitions'
import '../general.scss'

export default class Base extends React.PureComponent {
  state = {
    parserType: 'open-api-v3',
    definitionUrl: null,
    definition: null,
    parsedDefinition: null,
    loading: false,
    error: null
  }

  constructor (props) {
    super(props)

    this.intitialize()
  }

  setDefinition = async ({ definitionUrl, parserType = this.state.parserType }) => {
    this.setState({ loading: !!definitionUrl, error: null })

    try {
      const definition = await getDefinition(definitionUrl)
      const parsedDefinition = await parseDefinition(definition, parserType)

      this.setState({ loading: false, definitionUrl, definition, parsedDefinition, parserType })
    } catch (err) {
      return this.setState({ loading: false, error: err })
    }
  }

  intitialize = async () => {
    const { parserType } = this.state
    const { definitionUrl } = this.props

    if (!definitionUrl) { return true }
    if (definitionUrl === this.state.definitionUrl) { return false }

    await this.setDefinition({ definitionUrl, parserType })

    configureAnchors({ offset: -10, scrollDuration: 100 })

    return true
  }

  render () {
    const { parsedDefinition: definition, definitionUrl, loading, error } = this.state
    const { location } = this.props

    let element

    if (loading) {
      element = <Loading {...{definitionUrl}} />
    } else if (error) {
      element = <Failure {...{error}} />
    } else {
      element = <Definition {...{ location, definition, definitionUrl }} />
    }

    return (
      <DocumentTitle title={definition ? definition.title : 'Open API v3 renderer'}>
        <div className='main'>
          {element}
        </div>
      </DocumentTitle>
    )
  }
}

const Definition = ({ definition, definitionUrl, location }) =>
  !definition
    ? <Overlay>
      <h3>Missing definition URL.</h3>
    </Overlay>
    : <Page definition={definition} location={location} specUrl={definitionUrl} />

Definition.propTypes = {
  definition: PropTypes.object,
  definitionUrl: PropTypes.string,
  location: PropTypes.object
}

const Failure = ({ error }) =>
  <Overlay>
    <h3>Failure to load definition</h3>
    <br />
    <p style={{ // FIXME: better error display solution later
      textAlign: 'left',
      maxWidth: '50%',
      margin: '0 auto',
      fontFamily: 'monospace'
    }}>{error.message}</p>
  </Overlay>

Failure.propTypes = {
  error: PropTypes.object
}

const Loading = ({ definitionUrl }) =>
  <Overlay>
    <em>Loading <b>{definitionUrl}</b>...</em>
  </Overlay>

Loading.propTypes = {
  definitionUrl: PropTypes.string
}

Base.contextTypes = {
  router: PropTypes.object
}

Base.propTypes = {
  location: PropTypes.object
}
