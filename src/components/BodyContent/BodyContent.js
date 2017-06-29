import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import BodySchema from '../BodySchema/BodySchema'
import BodySchemaSwitcher from '../BodySchemaSwitcher/BodySchemaSwitcher'
import Example from '../Example/Example'
import { styles } from './BodyContent.styles'

@styles
export default class BodyContent extends Component {
  constructor (props) {
    super(props)

    this.setBodySchemaIndex = this.setBodySchemaIndex.bind(this)

    this.state = {
      tab: 'schema',
      index: 0
    }
  }

  render () {
    const { schema, examples, classes } = this.props
    const { tab, index } = this.state

    return (
      <div className={classes.bodyContent}>
        {schema && examples && this.renderTabs(schema, examples)}
        {tab === 'schema' && this.renderSchema(schema, index)}
        {tab === 'example' && this.renderExamples(examples)}
      </div>
    )
  }

  renderTabs (includeSchema, includeExample) {
    const currentTab = this.state.tab
    const { classes } = this.props

    return (
      <div className={classes.tabs}>
        {includeSchema && this.renderSchemaTab(currentTab)}
        {includeExample && this.renderExamplesTab(currentTab)}
      </div>
    )
  }

  renderSchemaTab (currentTab) {
    const { classes } = this.props
    return (
      <div
        role='button'
        onClick={() => this.setState({ tab: 'schema' })}
        className={classNames({
          [classes.active]: (currentTab === 'schema')
        })}
      >
        Schema
      </div>
    )
  }

  renderExamplesTab (currentTab) {
    const { classes } = this.props
    return (
      <div
        role='button'
        onClick={() => this.setState({ tab: 'example' })}
        className={classNames({
          [classes.active]: (currentTab === 'example')
        })}
      >
        Example
      </div>
    )
  }

  renderSchema (schema, index) {
    const { examples } = this.props
    const hasTabs = (schema !== undefined && examples !== undefined)

    if (!schema) {
      return null
    }

    // Peek at first item of `schema` to see if it's an array of possible
    // schemas (eg. oneOf).
    if (Array.isArray(schema[0])) {
      return (
        <div className='body-content-switcher'>
          <BodySchemaSwitcher options={schema} onChange={this.setBodySchemaIndex} />
          <BodySchema properties={schema[index]} styleVariation='odd' hasTabs={hasTabs} />
        </div>
      )
    }

    return (
      <BodySchema properties={schema} styleVariation='odd' hasTabs={hasTabs} />
    )
  }

  renderExamples (examples) {
    return (
      <Example examples={examples} />
    )
  }

  setBodySchemaIndex (bodySchemaIndex) {
    const { index } = this.state

    if (bodySchemaIndex !== index) {
      this.setState({ index: bodySchemaIndex })
    }
  }
}

BodyContent.propTypes = {
  schema: PropTypes.array,
  examples: PropTypes.array,
  classes: PropTypes.object
}
