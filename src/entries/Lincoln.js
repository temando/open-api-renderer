import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Base from '../containers/Base'

export default class LincolnRenderer extends React.Component {
  render () {
    return <Router>
      <Route path='*' component={passProps(Base, this.props)} />
    </Router>
  }
}

const passProps = (Component, extraProps) => (props) =>
  <Component {...{...props, ...extraProps}} />
