import React from 'react'
import { parse as parseQuery } from 'qs'
import jss from 'jss'
import preset from 'jss-preset-default'
import PropTypes from 'prop-types'
import { configureAnchors } from 'react-scrollable-anchor'
import YAML from 'js-yaml'
import Lincoln from '../Lincoln'
import { styles } from './Demo.styles'
import Overlay from '../../components/Overlay/Overlay'

jss.setup(preset())
configureAnchors({ offset: -52, scrollDuration: 200, keepLastAnchorHash: true })

const definitionUrl = parseQuery(window.location.search.split('?')[1]).url
const hash = window.location.hash

@styles
export class Demo extends React.PureComponent {
  state = {
    definitionUrl,
    showDialog: false,
    inputBody: ''
  }

  useUrlInput = () => {
    this.setState({ definitionUrl: this.urlInput.value })
  }

  setUrlInput = (input) => {
    this.urlInput = input
  }

  openInputDialog = () => {
    this.setState({ showDialog: true })
  }

  render () {
    const { classes } = this.props
    const { definitionUrl, showDialog, inputBody } = this.state

    return (
      <div className={classes.demo}>
        {
          // showDialog &&
          <div className={classes.dialog}>
            <Overlay>
              <textarea
                value={inputBody}
                onChange={(event) =>
                  this.setState({ inputBody: event.target.value })
                }
              />
              <div><button className={classes.button} onClick={this.readDefinition}>RENDER</button></div>
            </Overlay>
          </div>
        }
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
            <button className={classes.button} onClick={this.useUrlInput}>RENDER</button>
          </form>
          <button className={classes.button} onClick={this.openInputDialog}>INPUT</button>
        </header>
        <Lincoln {...{ definitionUrl, hash }} />
      </div>
    )
  }
}

Demo.propTypes = {
  classes: PropTypes.object
}
