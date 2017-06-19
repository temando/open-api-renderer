import React from 'react'
import { parse as parseQuery } from 'qs'
import OpenApiRenderer from '../OpenApiRenderer'

import './styles.scss'

export class Demo extends React.PureComponent {
  state = {
    definitionUrl: parseQuery(location.search.split('?')[1]).url
  }

  useUrlInput = () => {
    this.setState({ definitionUrl: this.urlInput.value })
  }

  setUrlInput = (input) => { this.urlInput = input }

  render () {
    const { definitionUrl } = this.state

    console.log({def: definitionUrl})

    return (
      <div className='oapi-demo'>
        <div className='oapi-header'>
          <button onClick={this.useUrlInput}>READ</button>
          <input
            name='urlInput'
            type='text'
            defaultValue={this.state.definitionUrl}
            ref={this.setUrlInput}
          />
        </div>
        {
          definitionUrl
            ? <OpenApiRenderer {...{ definitionUrl }} />
            : 'Add a Open Api definition to render...'
        }
      </div>
    )
  }
}
