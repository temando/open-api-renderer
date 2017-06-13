import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { routes } from './routes'

export default class App extends React.Component {
  render () {
    return <Router>{routes}</Router>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
