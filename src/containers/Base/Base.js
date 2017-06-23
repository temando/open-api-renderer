import React from 'react'
import { configureAnchors } from 'react-scrollable-anchor'
import DocumentTitle from 'react-document-title'
import PropTypes from 'prop-types'
import Page from '../../components/Page/Page'
import Overlay from '../../components/Overlay/Overlay'
import { getDefinition, parseDefinition, validateDefinition } from '../lib/definitions'
import lincolnLogo from '../../assets/lincoln-logo-white.svg'
import { styles } from './Base.styles'

@styles
export default class Base extends React.PureComponent {
  state = {
    parserType: 'open-api-v3',
    definitionUrl: null,
    definition: null,
    parsedDefinition: null,
    loading: false,
    error: null
  }

  componentDidMount () {
    this.intialise()
  }

  intialise = async () => {
    const { parserType } = this.state
    const { definitionUrl, navSort, validate } = this.props

    if (!definitionUrl) { return true }
    if (definitionUrl === this.state.definitionUrl) { return false }

    await this.setDefinition({ definitionUrl, parserType, navSort, validate })

    configureAnchors({ offset: -10, scrollDuration: 100 })

    return true
  }

  setDefinition = async ({ definitionUrl, navSort, validate, parserType = this.state.parserType }) => {
    this.setState({ loading: !!definitionUrl, error: null })

    try {
      const promises = [ getDefinition(definitionUrl) ]
      if (validate) {
        promises.push(validateDefinition(definitionUrl, parserType))
      }

      const [ definition ] = await Promise.all(promises)
      const parsedDefinition = await parseDefinition({ definition, parserType, navSort })

      this.setState({ loading: false, definitionUrl, definition, parsedDefinition, parserType })
    } catch (err) {
      return this.setState({ loading: false, error: err })
    }
  }

  render () {
    const { location, classes } = this.props
    const { parsedDefinition: definition, definitionUrl, loading, error } = this.state

    let element

    if (loading) {
      element = <Loading {...{definitionUrl}} />
    } else if (error) {
      element = <Failure {...{error}} />
    } else {
      element = <Definition {...{ location, definition, definitionUrl }} />
    }

    return (
      <DocumentTitle title={definition ? definition.title : 'Lincoln Renderer'}>
        <div className={classes.base}>
          {element}
        </div>
      </DocumentTitle>
    )
  }
}

Base.contextTypes = {
  router: PropTypes.object
}

Base.propTypes = {
  classes: PropTypes.object,
  location: PropTypes.object,
  definitionUrl: PropTypes.string,
  navSort: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  validate: PropTypes.bool
}

Base.defaultProps = {
  navSort: false,
  validate: false
}

const Definition = ({ definition, definitionUrl, location }) =>
  !definition
    ? <Overlay>
      <img src={lincolnLogo} alt='' />
      <h3>Render your Open API definition by adding the CORS-enabled URL above.</h3>
      <p>You can also set this with the <code>?url</code> query parameter.</p>
    </Overlay>
    : <Page definition={definition} location={location} specUrl={definitionUrl} />

Definition.propTypes = {
  definition: PropTypes.object,
  definitionUrl: PropTypes.string,
  location: PropTypes.object
}

const Failure = ({ error }) =>
  <Overlay>
    <h3>Failed to load definition.</h3>
    <br />
    <p>{error.message}</p>
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
