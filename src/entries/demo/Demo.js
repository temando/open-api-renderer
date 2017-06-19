import React from 'react'
import { parse as parseQuery } from 'qs'
import Lincoln from '../Lincoln'
import './Demo.scss'

const definitionUrl = parseQuery(location.search.split('?')[1]).url

export class Demo extends React.PureComponent {
  state = {
    definitionUrl
  }

  useUrlInput = () => {
    this.setState({ definitionUrl: this.urlInput.value })
  }

  setUrlInput = (input) => { this.urlInput = input }

  render () {
    const { definitionUrl } = this.state

    return (
      <div className='oapi-demo'>
        <div className='oapi-header'>
          <input
            name='urlInput'
            type='text'
            defaultValue={this.state.definitionUrl}
            ref={this.setUrlInput}
          />
          <button onClick={this.useUrlInput}>READ</button>
        </div>
        <Lincoln {...{ definitionUrl }} />
      </div>
    )
  }
}
