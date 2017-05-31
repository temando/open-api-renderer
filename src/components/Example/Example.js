import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import ReactJson from 'react-json-view'
import copy from 'copy-to-clipboard'

import CopyButton from '../CopyButton/CopyButton'

import './Example.scss'

export default class Example extends Component {
  constructor (props) {
    super(props)

    this.onCopyClick = this.onCopyClick.bind(this)
    this.updateState = this.updateState.bind(this)
    this.renderString = this.renderString.bind(this)
    this.renderJson = this.renderJson.bind(this)

    const { example, examples } = this.props
    let exampleToShow = example

    if (!exampleToShow && examples && examples.length > 0) {
      exampleToShow = examples[0]
    }

    this.state = {
      hovered: false,
      collapseAll: false,
      example: exampleToShow
    }
  }

  render () {
    const example = this.state.example

    if (example) {
      if (typeof example === 'string') {
        return this.renderString(example)
      } else {
        return this.renderJson(example)
      }
    }

    return null
  }

  renderString (example) {
    return (
      <div className='body-content-example'>{example}</div>
    )
  }

  renderJson (example) {
    return (
      <div className='body-content-example'
        onMouseEnter={() => this.updateState({ hovered: true })}
        onMouseLeave={() => this.updateState({ hovered: false })}
      >
        <div className={classNames('action-buttons', {
          hovered: this.state.hovered
        })}>
          <CopyButton onCopyClick={this.onCopyClick} tooltip='Copy to Clipboard' />
          <span onClick={() => this.updateState({ collapseAll: false })}>Expand All</span>
          <span onClick={() => this.updateState({ collapseAll: true })}>Collapse All</span>
        </div>
        <ReactJson src={example} theme='chalk' displayDataTypes={false} displayObjectSize={false}
          collapsed={this.state.collapseAll}
          enableClipboard={false} />
      </div>
    )
  }

  /**
   * Update internal state
   *
   * @param {Object} changedState
   */
  updateState (changedState) {
    this.setState(Object.assign({}, this.state, changedState))
  }

  onCopyClick () {
    copy(JSON.stringify(this.state.example, null, 2))
  }
}

Example.propTypes = {
  example: PropTypes.string,
  examples: PropTypes.array
}
