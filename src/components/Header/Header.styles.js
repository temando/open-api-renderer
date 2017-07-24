import { createSheet } from '../../theme'

export const styles = createSheet(({ borders, sizes }) => ({
  'header': {
    padding: '0 2rem',

    '& h1': {
      margin: '.5rem 0'
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
    borderBottom: `1px solid ${borders.default}`,

    '& dt, & dd': {
      margin: '0',
      padding: '.5rem',
      borderTop: `1px solid ${borders.default}`
    },

    '& dt': {
      paddingRight: '1.5rem',
      fontWeight: 600
    }
  },

  [`@media (max-width: ${sizes.breakpoint})`]: {
    'header': {
      padding: '0 1rem'
    },
    'inlinePairs': {
      display: 'block'
    }
  }
}))
