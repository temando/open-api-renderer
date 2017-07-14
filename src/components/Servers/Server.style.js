import { createSheet } from '../../theme'

export const styles = createSheet(({borders, text, sizes}) => ({
  server: {
    lineHeight: '200%'
  },
  readonly: {
    width: '100%',
    '&:focus': {
      outline: 'none'
    }
  }
}))
