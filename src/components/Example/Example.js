import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import copy from 'copy-to-clipboard'
import CopyButton from '../CopyButton/CopyButton'
import { styles } from './Example.styles'

@styles
export default class Example extends Component {
  constructor (props) {
    super(props)

    this.onCopyClick = this.onCopyClick.bind(this)

    this.state = {
      hovered: false,
      collapseAll: false
    }
  }

  render () {
    const { examples, classes } = this.props
    let example

    // TODO: Handle multiple examples
    if (examples && examples.length) {
      example = examples[0]
    }

    const isJson = typeof example !== 'string'

    if (!example) {
      return null
    }

    return (
      <div className={classes.example}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
      >
        <div className={classNames(classes.buttons, {
          [classes.hovered]: this.state.hovered
        })}>
          <CopyButton onCopyClick={this.onCopyClick} tooltip='Copy to Clipboard' />
          {!isJson &&
            <span onClick={() => this.setState({ collapseAll: false })}>Expand All</span>}
          {!isJson &&
            <span onClick={() => this.setState({ collapseAll: true })}>Collapse All</span>}
        </div>
        <pre>
          {
            isJson
              ? JSON.stringify(example, null, 2)
              : example
          }
        </pre>
      </div>
    )
  }

  onCopyClick () {
    copy(JSON.stringify(this.props.examples[0], null, 2))
  }
}

Example.propTypes = {
  examples: PropTypes.array,
  classes: PropTypes.object
}
