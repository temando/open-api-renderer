import { createSheet } from '../../theme'

export const styles = createSheet(({borders, backgrounds, text, sizes}) => ({
  endpoints: {
    minWidth: '60rem',
    backgroundColor: `${backgrounds.schema}`,
    padding: '.5rem',
    boxShadow: '2px 2px 1rem rgba(0,0,0,0.25)',
    borderRadius: '.5rem'
  },

  [`@media (max-width: ${sizes.breakpoint})`]: {
    'endpoints': {
      minWidth: 'auto',
      width: '100%'
    }
  }
}))
