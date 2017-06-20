import { createMuiTheme } from 'material-ui/styles'
import createPalette from 'material-ui/styles/palette'

export const theme = createMuiTheme({
  palette: createPalette({
    type: 'dark'
  })
})

export const colors = {
  navigationBackground: '#444'
}

console.log({theme})
