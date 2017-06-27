import React from 'react'
import { parse as parseQuery } from 'qs'
import jss from 'jss'
import preset from 'jss-preset-default'
import Lincoln from '../Lincoln'
import { styles } from './Demo.styles'
import PropTypes from 'prop-types'

jss.setup(preset())

const definitionUrl = parseQuery(location.search.split('?')[1]).url

@styles
export class Demo extends React.PureComponent {
  state = {
    definitionUrl,
    navSort: false
  }

  useUrlInput = () => {
    this.setState({ definitionUrl: this.urlInput.value })
  }

  setUrlInput = (input) => {
    this.urlInput = input
  }

  render () {
    const { classes } = this.props
    const { definitionUrl, navSort } = this.state

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
        <Lincoln {...{ definitionUrl, navSort }} />
      </div>
    )
  }
}

Demo.propTypes = {
  classes: PropTypes.object
}
