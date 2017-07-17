import { createSheet } from '../../theme'
import c from 'color'

export const styles = createSheet(({borders, backgrounds, text, sizes}) => ({
  endpoints: {
    minWidth: '30rem',
    backgroundColor: `${c(backgrounds.schema)}`,
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
