import c from 'color'

export const styles = theme => ({
  endpoints: {
    minWidth: '60rem',
    backgroundColor: `${c(theme.backgrounds.schema)}`,
    padding: '.5rem',
    boxShadow: '2px 2px 1rem rgba(0,0,0,0.25)',
    borderRadius: '.5rem'
  },

  [`@media (max-width: ${theme.sizes.breakpoint})`]: {
    'endpoints': {
      minWidth: 'auto',
      width: '100%'
    }
  }
})
