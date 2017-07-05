import React from 'react'
import { parse as parseQuery } from 'qs'
import jss from 'jss'
import preset from 'jss-preset-default'
import PropTypes from 'prop-types'
import { configureAnchors } from 'react-scrollable-anchor'
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
    showDialog: false,
    definition: '',
    useDefinition: false
  }

  useUrlInput = () => this.setState({ definitionUrl: this.urlInput.value })
  setUrlInput = (input) => { this.urlInput = input }
  updateDefinition = (event) => this.setState({ useDefinition: false, definition: event.target.value })
  toggleDialog = () => this.setState({ showDialog: !this.state.showDialog })

  renderInputDefinition = () => {
    this.setState({ useDefinition: true, definitionUrl: '', showDialog: false })
  }

  render () {
    const { classes } = this.props
<<<<<<< HEAD
    const { definitionUrl, definition, showDialog, inputBody } = this.state
    const initialSchemaTreeDepth = 1
=======
    const { definitionUrl, showDialog, definition, useDefinition } = this.state
>>>>>>> Update demo

    return (
      <div className={classes.demo}>
        {
          showDialog &&
          <div className={classes.dialog}>
            <Overlay>
              <textarea
                value={definition}
                onChange={this.updateDefinition}
                placeholder='Definition body (YAML or JSON)...'
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
          useDefinition
            ? <Lincoln {...{ definition, hash, initialSchemaTreeDepth, wew: 'lad' }} />
            : <Lincoln {...{ definitionUrl, hash, initialSchemaTreeDepth, lad: 'wew' }} />
        }
      </div>
    )
  }
}

Demo.propTypes = {
  classes: PropTypes.object
}
