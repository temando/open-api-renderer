import c from 'color'

export const styles = theme => ({
  method: {
    borderBottom: `1px solid ${theme.borders.default}`,
    margin: '0 1rem 2rem 0',
    padding: '1rem 0',

    '& > h3': {
      display: 'inline-block',
      margin: '0 1.5rem .5rem 0'
    },

    '& h4': {
      fontSize: `${theme.sizes.text}`,
      textTransform: 'uppercase',
      color: `${c(theme.text.secondary)}`,
      borderBottom: `1px solid ${theme.borders.default}`,
      marginTop: '1rem'
    }
  },

  [`@media (max-width: ${theme.sizes.breakpoint})`]: {
    'method': {
      padding: '1rem 0',
      margin: 0
    }
  }
})
