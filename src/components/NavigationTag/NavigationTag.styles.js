import { createSheet } from '../../theme'

export const styles = createSheet(() => ({
  'navigationTagMethods': {
    '&$expanded': {
      marginBottom: '.5rem'
    }
  },

  'navigationTag': {
    display: 'block',
    padding: '1rem 1rem .5rem',

    '&:hover': {
      textDecoration: 'none',

      '& span': { textDecoration: 'underline' }
    }
  },

  'expanded': {}
}))
