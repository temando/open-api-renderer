import React from 'react'
import ReactDOM from 'react-dom'
import OpenApiRenderer from './OpenApiRenderer'
import { parse as parseQuery } from 'qs'

const definitionUrl = parseQuery(location.search.split('?')[1]).url

ReactDOM.render(<OpenApiRenderer definitionUrl={definitionUrl} />, document.getElementById('app'))
