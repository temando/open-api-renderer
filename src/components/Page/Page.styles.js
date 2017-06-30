import { createSheet } from '../../theme'

export const styles = createSheet(({ borders }) => ({
  'page': {
    width: '100%',
    height: '100%'
  },
  'main': {
    marginLeft: '20%',
    width: '80%',
    boxSizing: 'border-box',
    border: `1px solid ${borders.default}`
  }
}))
