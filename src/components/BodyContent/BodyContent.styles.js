import { createSheet } from '../../theme'

export const styles = createSheet(({ shades }) => ({
  'bodyContent': {
    display: 'table',
    width: '100%',
    border: '2px solid black',
    padding: '10px',
    boxSizing: 'border-box'
  },

  'tabs': {
    position: 'relative',
    top: '2px',

    '& > div': {
      display: 'inline-block',
      padding: '10px 20px 10px 0',
      borderLeft: 'none',
      cursor: 'pointer',

      '&$active': {
        fontWeight: 'bold',
        borderBottom: 'none',
        textDecoration: 'underline'
      }
    }
  },

  'active': {}
}))
