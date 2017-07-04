import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ScrollableAnchor from 'react-scrollable-anchor'
import BodyContent from '../BodyContent/BodyContent'
import Description from '../Description/Description'
import Parameters from '../Parameters/Parameters'
import Response from '../Response/Response'
import { styles } from './Method.styles'

@styles
export default class Method extends PureComponent {
  render () {
    const { method, classes } = this.props
    const { title, type, description, parameters, request, responses } = method

    return (
      <ScrollableAnchor id={method.link}>
        <div className={classes.method}>
          <h3>
            {title}
            <span className={classNames(classes.type, `${method.type}`)}>{type}</span>
          </h3>
          <div>
            {description && <Description description={description} />}
            {parameters && <Parameters parameters={parameters} /> }
            {request && this.renderRequest(request)}
            {responses && this.renderResponses(responses)}
          </div>
        </div>
      </ScrollableAnchor>
    )
  }

  renderRequest (request) {
    const { schema, examples } = request

    if (!schema) {
      return null
    }

    return (
      <div className='method-request'>
        <h4>Request Body</h4>
        <BodyContent schema={schema} examples={examples} />
      </div>
    )
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
  method: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    parameters: PropTypes.object,
    request: PropTypes.object,
    responses: PropTypes.array
  }),
  classes: PropTypes.object
}
