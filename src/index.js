import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'

import routes from './routes'

export default class App extends React.Component {
  render () {
    return <Router history={history}>{routes}</Router>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
