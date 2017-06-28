import { createSheet } from '../../theme'

export const styles = createSheet(() => ({
  'bodySchema': {
    width: '100%',
    borderSpacing: '0',
    padding: '10px 50px 10px 20px',
    boxSizing: 'border-box',
    // color: '#d0d4d7',
    borderRadius: '10px'
  },

  'even': {
    // backgroundColor: '#2D3134'
    backgroundColor: '#FFF'
  },
  'odd': {
    backgroundColor: '#F0F0F0'
  }
}))
