import React from 'react'
import { parse as parseQuery } from 'qs'
import jss from 'jss'
import preset from 'jss-preset-default'
import PropTypes from 'prop-types'
import { configureAnchors } from 'react-scrollable-anchor'
import YAML from 'js-yaml'
import cn from 'classnames'
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
    showDialog: true,
    inputBody: '',
    definition: null
  }

  useUrlInput = () => this.setState({ definitionUrl: this.urlInput.value })
  setUrlInput = (input) => { this.urlInput = input }
  updateDefinition = (event) => this.setState({ inputBody: event.target.value })
  toggleDialog = () => this.setState({ showDialog: !this.state.showDialog })

  renderInputDefinition = () => {
    const { inputBody } = this.state

    this.setState({ definition: inputBody, showDialog: false })
  }

  render () {
    const { classes } = this.props
    const { definitionUrl, definition, showDialog, inputBody } = this.state

    return (
      <div className={classes.demo}>
        {
          showDialog &&
          <div className={classes.dialog}>
            <Overlay>
              <textarea
                value={inputBody}
                onChange={this.updateDefinition}
                placeholder='Definition body...'
              />
              <div>
                <button
                  className={classes.button}
                  onClick={this.renderInputDefinition}
                >RENDER</button>
                <button
                  className={cn(classes.button, classes.closeButton)}
                  onClick={this.toggleDialog}
                >CLOSE</button>
              </div>
            </Overlay>
          </div>
        }

        <header className={classes.header}>
          <h1>Lincoln</h1>
          <small>An Open API v3 renderer.</small>
          <form className={classes.form} style={{ opacity: showDialog ? '0' : '1' }}>
            <label htmlFor='url'>Definition URL</label>
            <input
              name='url'
              type='url'
              defaultValue={this.state.definitionUrl}
              ref={this.setUrlInput}
            />
            <button
              className={classes.button}
              onClick={this.useUrlInput}
            >RENDER</button>
          </form>

          <button
            className={cn(classes.button, classes.inputButton)}
            onClick={this.toggleDialog}
          >TEXT INPUT</button>
        </header>
        {
          definition
            ? <Lincoln {...{ definition, hash }} />
            : <Lincoln {...{ definitionUrl, hash }} />
        }
      </div>
    )
  }
}

Demo.propTypes = {
  classes: PropTypes.object
}
