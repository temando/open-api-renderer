import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { configureAnchors } from 'react-scrollable-anchor'
import DocumentTitle from 'react-document-title'
import PropTypes from 'prop-types'

import Page from '../components/Page/Page'
import getDefinition from '../store/definition/actions'
import '../general.scss'

class BaseHandler extends Component {
  componentDidMount () {
    // TODO: refactor this to be more flexible, i.e. coming from multiple places
    const openApiUrl = this.props.location.query.url
    const parserType = this.props.parserType
    this.props.getDefinition(openApiUrl, parserType)
    configureAnchors({ offset: 10 })
  }

  render () {
    const { parsedDefinition: definition, location } = this.props
    return (
      <DocumentTitle title='Open API v3 renderer'>
        <div className='main'>
          {!definition && "Welcome to Temando's new Open API Renderer. Watch this space!"}
          {definition && <Page definition={definition} location={location} />}
        </div>
      </DocumentTitle>
    )
  }
}

const mapStateToProps = state => {
  return {
    parsedDefinition: state.data.parsedDefinition,
    parserType: state.data.parserType
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getDefinition
}, dispatch)

BaseHandler.contextTypes = {
  router: PropTypes.object
}

BaseHandler.propTypes = {
  location: PropTypes.object,
  parserType: PropTypes.string,
  parsedDefinition: PropTypes.object,
  getDefinition: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseHandler)
