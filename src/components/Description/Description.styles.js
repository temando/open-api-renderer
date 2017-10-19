import c from 'color'

export const styles = theme => ({
  'description': {
    color: `${c(theme.text.description)}`,
    maxWidth: '80rem',

    '&$inline': {
      fontSize: `${theme.sizes.text}`,
      '&, & p': {
        display: 'inline'
      }
    },
    '& p': {
      margin: '.5rem 0'
    },
    '& p, & p *': {
      fontSize: `${theme.sizes.text}`
    }
  },
  'inline': {
    paddingRight: '.2rem'
  }
})
