import React, { PureComponent } from 'react'
import injectSheet, { withTheme } from 'react-jss'
import PropTypes from 'prop-types'
import ScrollableAnchor from 'react-scrollable-anchor'
import BodyContent from '../BodyContent/BodyContent'
import Description from '../Description/Description'
import Parameters from '../Parameters/Parameters'
import Response from '../Response/Response'
import MethodEndpoints from './MethodEndpoints'
import { styles } from './Method.styles'

@withTheme
@injectSheet(styles)
export default class Method extends PureComponent {
  render () {
    const {method, classes, initialSchemaTreeDepth} = this.props
    const {title, type, path, endpoints, description, parameters, request, responses} = method

    return (
      <ScrollableAnchor id={method.link}>
        <div className={classes.method}>
          <h3>
            {title}
          </h3>
          <MethodEndpoints type={type} path={path} endpoints={endpoints} />
          <div>
            {description && <Description description={description} />}
            {parameters && <Parameters parameters={parameters} initialSchemaTreeDepth={initialSchemaTreeDepth} />}
            {request && this.renderRequest(request, initialSchemaTreeDepth)}
            {responses && this.renderResponses(responses, initialSchemaTreeDepth)}
          </div>
        </div>
      </ScrollableAnchor>
    )
  }

  renderRequest (request, initialSchemaTreeDepth) {
    const {schema, examples} = request

    if (!schema) {
      return null
    }

    return (
      <div className='method-request'>
        <h4>Request Body</h4>
        <BodyContent schema={schema} examples={examples} initialSchemaTreeDepth={initialSchemaTreeDepth} />
      </div>
    )
  }

  renderResponses (responses, initialSchemaTreeDepth) {
    return (
      <div className='method-responses'>
        <h4>Responses</h4>
        {responses.map((r) => <Response key={r.code} response={r} initialSchemaTreeDepth={initialSchemaTreeDepth} />)}
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
    responses: PropTypes.array,
    path: PropTypes.string,
    endpoints: PropTypes.array
  }),
  classes: PropTypes.object,
  initialSchemaTreeDepth: PropTypes.number
}
