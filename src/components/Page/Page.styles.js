import { createSheet } from '../../theme'

export const styles = createSheet(({ shades }) => ({
  'page': {
    width: '100%',
    height: '100%'
  },
  'main': {
    marginLeft: '20%',
    paddingLeft: '10px',
    width: '80%',
    boxSizing: 'border-box',
    border: `1px solid ${shades.default}`
  }
}))
