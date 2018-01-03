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

    if (!example) {
      return null
    }

    const isJson = typeof example.value !== 'string'

    return (
      <div className={classes.example}>
        {example.summary &&
        <div className={classes.summary}>{ example.summary }</div>}
        {example.description &&
        <div className={classes.description}>{ example.description }</div>}
        {example.value &&
        <div className={classes.value}
          onMouseEnter={() => this.setState({ hovered: true })}
          onMouseLeave={() => this.setState({ hovered: false })}
        >
          <div className={classNames(classes.buttons, {
            [classes.hovered]: this.state.hovered
          })}>
            <CopyButton onCopyClick={this.onCopyClick} tooltip='Copy to Clipboard' />
            {!isJson &&
            <span onClick={() => this.setState({collapseAll: false})}>Expand All</span>}
            {!isJson &&
            <span onClick={() => this.setState({collapseAll: true})}>Collapse All</span>}
          </div>
          <pre>
            {
              isJson
                ? JSON.stringify(example.value, null, 2)
                : example.value
            }
          </pre>
        </div>}
      </div>
    )
  }

  onCopyClick () {
    copy(JSON.stringify(this.props.examples[0].value, null, 2))
  }
}

Example.propTypes = {
  examples: PropTypes.array,
  classes: PropTypes.object
}
