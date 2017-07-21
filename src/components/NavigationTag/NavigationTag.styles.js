export const styles = theme => ({
  'navigationTagMethods': {
    '&$expanded': {
      marginBottom: '.5rem'
    }
  },

  'navigationTag': {
    display: 'block',
    padding: '1rem 1rem .5rem',

    '& span': {
      fontSize: `${theme.sizes.h4}`
    },

    '&:hover': {
      textDecoration: 'none',

      '& span': { textDecoration: 'underline' }
    }
  },

  'expanded': {}
})
