import React from 'react'
import { parse as parseQuery } from 'qs'
import jss from 'jss'
import preset from 'jss-preset-default'
import injectSheet, { withTheme, ThemeProvider } from 'react-jss'
import PropTypes from 'prop-types'
import { configureAnchors } from 'react-scrollable-anchor'
import cn from 'classnames'
import Lincoln from '../Lincoln'
import { styles } from './Demo.styles'
import Overlay from '../../components/Overlay/Overlay'
import pencilIcon from '../../../assets/pencil.svg'
import globeIcon from '../../../assets/globe.svg'
import { theme } from './../../theme'

jss.setup(preset())

configureAnchors({ offset: -52, scrollDuration: 200, keepLastAnchorHash: true })

const definitionUrl = parseQuery(window.location.search.split('?')[1]).url
const hash = window.location.hash

@withTheme
@injectSheet(styles)
export class Demo extends React.PureComponent {
  state = {
    definitionUrl,
    showDialog: false,
    showForm: false,
    definition: '',
    useDefinition: false
  }

  useUrlInput = () => this.setState({ definitionUrl: this.urlInput.value, showDialog: false, showForm: false })
  setUrlInput = (input) => { this.urlInput = input }
  updateDefinition = (event) => this.setState({ useDefinition: false, definition: event.target.value })
  toggleDialog = () => this.setState({ showDialog: !this.state.showDialog, showForm: false })
  toggleForm = () => this.setState({ showForm: !this.state.showForm, showDialog: false })

  renderInputDefinition = () => {
    this.setState({ useDefinition: true, definitionUrl: '', showDialog: false, showForm: false })
  }

  render () {
    const { classes = {} } = this.props
    const { definitionUrl, showDialog, showForm, definition, useDefinition } = this.state
    const initialSchemaTreeDepth = 1
    const navigationMethodDisplayType = 'all'

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
        {
          showForm &&
          <div className={classes.dialog}>
            <Overlay>
              <form className={classes.form}>
                <label htmlFor='url'>Definition URL</label>
                <input
                  name='url'
                  type='url'
                  defaultValue={this.state.definitionUrl}
                  ref={this.setUrlInput}
                />
              </form>
              <div>
                <button
                  className={classes.button}
                  onClick={this.useUrlInput}
                >RENDER</button>
                <button
                  className={cn(classes.button, classes.closeButton)}
                  onClick={this.toggleForm}
                >CLOSE</button>
              </div>
            </Overlay>
          </div>
        }

        <header className={classes.header}>
          <h1>Lincoln</h1>
          <small>An Open API v3 renderer.</small>
          <div className={classes.toggleButtons}>
            <button
              className={classes.inputButton}
              onClick={this.toggleForm}
            ><img src={globeIcon} alt='' /></button>
            <button
              className={classes.inputButton}
              onClick={this.toggleDialog}
            ><img src={pencilIcon} className={classes.pencil} alt='' /></button>
          </div>
        </header>
        {
          useDefinition
            ? <Lincoln {...{ definition, hash, initialSchemaTreeDepth, navigationMethodDisplayType }} />
            : <Lincoln {...{ definitionUrl, hash, initialSchemaTreeDepth, navigationMethodDisplayType }} />
        }
      </div>
    )
  }
}

Demo.propTypes = {
  classes: PropTypes.object
}

export const DemoRoot = () => (
  <ThemeProvider theme={theme}>
    <Demo />
  </ThemeProvider>
)
