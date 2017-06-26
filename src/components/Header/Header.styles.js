import { createSheet } from '../../theme'

export const styles = createSheet(({ shades }) => ({
  'header': {
    padding: '0 20px',

    '& h1': {
      marginBottom: '.5rem'
    },

    '& nav a': {
      display: 'inline-block',
      marginRight: '.5rem'
    }
  },

  'inlinePairs': {
    display: 'inline-flex',
    margin: '1em 0',
    padding: '0',
    borderBottom: '1px solid $border-color',

    '& dt, & dd': {
      margin: '0',
      padding: '.5rem',
      borderTop: '1px solid $border-color'
    },

    '& dt': {
      paddingRight: '1.5rem',
      fontWeight: 'bold'
    }
  }
}))
