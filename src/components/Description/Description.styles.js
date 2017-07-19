import c from 'color'
import { createSheet } from '../../theme'

export const styles = createSheet(({ text }) => ({
  'description': {
    color: `${c(text.description)}`,
    fontSize: '1rem',

    '&$inline': {
      '&, & p': {
        display: 'inline'
      }
    },
    '& p': {
      margin: '.5rem 0'
    }
  },
  'inline': {
    paddingRight: '.2rem'
  }
}))
