import { createSheet } from '../../theme'

export const styles = createSheet(() => ({
  'bodySchema': {
    width: '100%',
    borderSpacing: '0',
    padding: '10px 50px 10px 20px',
    boxSizing: 'border-box'
  },

  'even': {
    backgroundColor: 'rgb(27, 37, 52)'
  },
  'odd': {
    backgroundColor: 'rgb(14, 24, 39)'
  }
}))
