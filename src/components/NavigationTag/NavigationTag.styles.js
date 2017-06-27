import { createSheet } from '../../theme'

export const styles = createSheet(() => ({
  'navigationTagMethods': {
    marginBottom: '.5rem'
  },

  'navigationTag': {
    display: 'block',
    padding: '1rem 1rem .5rem',
    color: '#FFF',

    '&:hover': {
      textDecoration: 'none',

      '& span': { textDecoration: 'underline' }
    }
  }
}))
