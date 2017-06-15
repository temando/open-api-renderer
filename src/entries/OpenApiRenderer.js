import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { routes } from '../routes'

export default class OpenApiRenderer extends React.Component {
  render () {
    return <Router>{routes}</Router>
  }
}
