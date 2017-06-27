import React from 'react'
import { parse as parseQuery } from 'qs'
import jss from 'jss'
import preset from 'jss-preset-default'
import PropTypes from 'prop-types'
import { configureAnchors } from 'react-scrollable-anchor'
import Lincoln from '../Lincoln'
import { styles } from './Demo.styles'

jss.setup(preset())
configureAnchors({ offset: -52, scrollDuration: 200, keepLastAnchorHash: true })

const definitionUrl = parseQuery(window.location.search.split('?')[1]).url
const hash = window.location.hash

@styles
export class Demo extends React.PureComponent {
  state = {
    definitionUrl
  }

  useUrlInput = () => {
    this.setState({ definitionUrl: this.urlInput.value })
  }

  setUrlInput = (input) => {
    this.urlInput = input
  }

  render () {
    const { classes } = this.props
    const { definitionUrl } = this.state

    return (
      <div className={classes.demo}>
        <header className={classes.header}>
          <h1>Lincoln</h1>
          <small>An Open API v3 renderer.</small>
          <form>
            <label htmlFor='url'>Definition URL</label>
            <input
              name='url'
              type='url'
              defaultValue={this.state.definitionUrl}
              ref={this.setUrlInput}
            />
            <button onClick={this.useUrlInput}>RENDER</button>
          </form>
        </header>
        <Lincoln {...{ definitionUrl, hash }} />
      </div>
    )
  }
}

Demo.propTypes = {
  classes: PropTypes.object
}
