import c from 'color'
import { createSheet } from '../../theme'

export const styles = createSheet(({ text, sizes }) => ({
  'description': {
    color: `${c(text.description)}`,

    '&$inline': {
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
