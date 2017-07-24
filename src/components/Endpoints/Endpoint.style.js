import { createSheet } from '../../theme'

export const styles = createSheet(({borders, text, sizes}) => ({
  endpoint: {
    lineHeight: '1.4',
    '& + &': {
      marginTop: '.5rem'
    }
  },
  readonly: {
    fontFamily: 'monospace',
    lineHeight: '1.4',
    padding: '.25rem',
    width: '100%',
    boxSizing: 'border-box',
    '&:focus': {
      outline: 'none'
    }
  }
}))
