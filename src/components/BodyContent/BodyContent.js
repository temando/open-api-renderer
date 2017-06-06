import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import BodySchema from '../BodySchema/BodySchema'
import Example from '../Example/Example'

import './BodyContent.scss'

export default class BodyContent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tab: 'schema'
    }
  }

  render () {
    const { schema, examples } = this.props

    const { tab } = this.state
    return (
      <div className='body-content'>
        {schema && this.renderTabs(schema, examples)}
        {tab === 'schema' && this.renderSchema(schema)}
        {tab === 'example' && this.renderExamples(examples)}
      </div>
    )
  }

  renderTabs (includeSchema, includeExample) {
    const currentTab = this.state.tab
    return (
      <div className='body-content-tabs'>
        {includeSchema && this.renderSchemaTab(currentTab)}
        {includeExample && this.renderExamplesTab(currentTab)}
      </div>
    )
  }

  renderSchemaTab (currentTab) {
    return (
      <div
        role='button'
        onClick={() => this.setState({ tab: 'schema' })}
        className={classNames({
          active: (currentTab === 'schema')
        })}
      >
        Schema
      </div>
    )
  }

  renderExamplesTab (currentTab) {
    return (
      <div
        role='button'
        onClick={() => this.setState({ tab: 'example' })}
        className={classNames({
          active: (currentTab === 'example')
        })}
      >
        Example
      </div>
    )
  }

  renderSchema (schema) {
    if (!schema) {
      return null
    }

    // Peek at first item of `schema` to see if it's an array of possible
    // schemas (eg. oneOf).
    if (Array.isArray(schema[0])) {
      return schema.map(
        (schemaVariation, i) => <BodySchema key={i} properties={schemaVariation} styleVariation='odd' />
      )
    }

    return (
      <BodySchema properties={schema} styleVariation='odd' />
    )
  }

  renderExamples (examples) {
    return (
      <Example examples={examples} />
    )
  }
}

BodyContent.propTypes = {
  schema: PropTypes.array,
  examples: PropTypes.array
}
