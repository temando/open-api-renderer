import { createSheet } from '../../theme'

export const styles = createSheet(({ text, sizes }) => ({
  'description': {
    color: `${text.description}`,
    maxWidth: '80rem',

    '&$inline': {
      fontSize: `${sizes.text}`,
      '&, & p': {
        display: 'inline'
      }
    },
    '& p': {
      margin: '.5rem 0'
    },
    '& p, & p *': {
      fontSize: `${sizes.text}`
    }
  },
  'inline': {
    paddingRight: '.2rem'
  }
}))
