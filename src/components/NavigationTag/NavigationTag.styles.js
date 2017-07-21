import { createSheet } from '../../theme'

export const styles = createSheet((sizes) => ({
  'navigationTagMethods': {
    '&$expanded': {
      marginBottom: '.5rem'
    }
  },

  'navigationTag': {
    display: 'block',
    padding: '1rem 1rem .5rem',

    '& span': {
      fontSize: `${sizes.h4}`
    },

    '&:hover': {
      textDecoration: 'none',

      '& span': { textDecoration: 'underline' }
    }
  },

  'expanded': {}
}))
