import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ScrollableAnchor from 'react-scrollable-anchor'

import BodySchema from '../BodySchema/BodySchema'
import BodyContent from '../BodyContent/BodyContent'
import Description from '../Description/Description'
import Response from '../Response/Response'

import './Method.scss'

export default class Method extends Component {
  constructor (props) {
    super(props)

    this.renderParameters = this.renderParameters.bind(this)
    this.renderRequest = this.renderRequest.bind(this)
    this.renderResponses = this.renderResponses.bind(this)
  }

  render () {
    const { method } = this.props
    const parameters = method.parameters
    const request = method.request
    const responses = method.responses

    return (
      <ScrollableAnchor id={method.link}>
        <div className='method'>
          <h3>{method.summary}</h3>
          {method.description && <Description description={method.description} />}
          {parameters && this.renderParameters(parameters)}
          {request && this.renderRequest(request)}
          {responses && this.renderResponses(responses)}
        </div>
      </ScrollableAnchor>
    )
  }

  renderParameters (parameters) {
    return (
      <div className='method-parameters'>
        {parameters.path &&
        <div>
          <h4>Path Parameters</h4>
          <BodySchema properties={parameters.path} />
        </div>
        }
        {parameters.query &&
        <div>
          <h4>Query Parameters</h4>
          <BodySchema properties={parameters.query} />
        </div>
        }
      </div>
    )
  }

  renderRequest (request) {
    const { schema, example, examples } = request

    if (request.schema) {
      return (
        <div className='method-request'>
          <h4>Request Body</h4>
          <BodyContent schema={schema} example={example} examples={examples} />
        </div>
      )
    }

    return ''
  }

  renderResponses (responses) {
    return (
      <div className='method-responses'>
        <h4>Responses</h4>
        {responses.map((r) => <Response key={r.code} response={r} />)}
      </div>
    )
  }
}

Method.propTypes = {
  method: PropTypes.object
}
