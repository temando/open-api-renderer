import React from 'react'
import Base from '../containers/Base/Base'
import { ThemeProvider } from 'react-jss'
import { theme } from './../theme'

export default class Lincoln extends React.PureComponent {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Base {...this.props} />
      </ThemeProvider>
    )
  }
}
