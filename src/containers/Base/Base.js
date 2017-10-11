import React from 'react'
import { configureAnchors } from 'react-scrollable-anchor'
import DocumentTitle from 'react-document-title'
import PropTypes from 'prop-types'
import Page from '../../components/Page/Page'
import Overlay from '../../components/Overlay/Overlay'
import { getDefinition, parseDefinition, validateDefinition } from '../../lib/definitions'
import lincolnLogo from '../../assets/lincoln-logo-white.svg'
import { styles } from './Base.styles'
import { createBrowserHistory } from 'history'

configureAnchors({ offset: 10, scrollDuration: 200, keepLastAnchorHash: true })

@styles
export default class Base extends React.PureComponent {
  state = {
    parserType: 'open-api-v3',
    definition: null,
    parsedDefinition: null,
    loading: false,
    error: null,
    useStateHash: false,
    history: null
  }

  stopListeningToHistory;

  componentDidMount () {
    const {
      listenToHash,
      history: inputHistory
    } = this.props

    if (listenToHash) {
      this.history = inputHistory || createBrowserHistory()

      this.stopListeningToHistory = this.history.listen((location) => {
        const { hash } = location

        if ((this.state.useStateHash && this.state.hash === hash) || this.props.hash === hash) { return }

        this.setState({ useStateHash: true, hash })
      })
    }

    this.updateDefinition(this.props)
  }

  componentWillUpdate (props) {
    const isNewDefinition = props.definition && props.definition !== this.props.definition
    const isNewUrl = props.definitionUrl && props.definitionUrl !== this.props.definitionUrl

    if (isNewDefinition || isNewUrl) {
      this.updateDefinition(props)
    }
  }

  componentWillUnmount () {
    if (this.stopListeningToHistory) { this.stopListeningToHistory() }
  }

  updateDefinition = async (props) => {
    const { parserType } = this.state
    const {
      definitionUrl, navSort, validate
    } = props

    let { definition } = props

    if (definitionUrl && !definition) {
      if (definitionUrl === this.state.definitionUrl) { return }

      try {
        definition = await this.fetchDefinition({ definitionUrl, parserType, validate })
      } catch (error) {
        return this.setState({ loading: false, error })
      }
    }

    if (!definition) { return }

    this.setState({ loading: true, error: null })

    try {
      const parsedDefinition = await parseDefinition({ definition, parserType, navSort })

      this.setState({
        loading: false,
        definition,
        parsedDefinition,
        parserType
      })
    } catch (error) {
      return this.setState({ loading: false, error })
    }
  }

  fetchDefinition = async ({ definitionUrl, validate, parserType = this.state.parserType }) => {
    this.setState({ loading: true, error: null })

    return getDefinition(definitionUrl)
      .then((definition) => (validate && validateDefinition(definition, parserType)))
  }

  render () {
    const { hash: propsHash, classes, initialSchemaTreeDepth } = this.props
    const {
      parsedDefinition: definition,
      hash: stateHash,
      loading,
      error,
      useStateHash
    } = this.state

    const { definitionUrl } = this.props

    const hash = useStateHash ? stateHash : propsHash
    let element

    if (loading) {
      element = <Loading {...{definitionUrl}} />
    } else if (error) {
      element = <Failure {...{error}} />
    } else {
      element = <Definition {...{ hash, definition, definitionUrl, initialSchemaTreeDepth }} />
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
  hash: PropTypes.string.isRequired,
  definitionUrl: PropTypes.string,
  definition: PropTypes.string,
  navSort: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  validate: PropTypes.bool,
  history: PropTypes.object, // eslint-disable-line
  listenToHash: PropTypes.bool, // eslint-disable-line
  initialSchemaTreeDepth: PropTypes.number
}

Base.defaultProps = {
  hash: '',
  navSort: false,
  validate: false,
  listenToHash: true,
  initialSchemaTreeDepth: 0
}

const Definition = ({ definition, definitionUrl, hash, initialSchemaTreeDepth }) =>
  !definition
    ? <Overlay>
      <img src={lincolnLogo} alt='' />
      <h3>Render your OpenAPI document.<br /><br />You can either input a CORS-enabled URL above, or input a definition as text</h3>
      <p>You can also set a url with the <code>?url</code> query parameter.</p>
    </Overlay>
    : <Page definition={definition} hash={hash} definitionUrl={definitionUrl} initialSchemaTreeDepth={initialSchemaTreeDepth} />

Definition.propTypes = {
  definition: PropTypes.object,
  definitionUrl: PropTypes.string,
  hash: PropTypes.string,
  initialSchemaTreeDepth: PropTypes.number
}

const Failure = ({ error }) => {
  console.error('[Definition Error]')
  console.error(error)

  return <Overlay>
    <h3>Failed to load definition.</h3>
    <br />
    <p>{error.message}</p>
  </Overlay>
}

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
