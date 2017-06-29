import c from 'color'
import { createSheet } from '../../theme'

export const styles = createSheet(({ text }) => ({
  'description': {
    '&:not($inline)': {
      color: `${c(text.default).lighten(0.3)}`,
      fontSize: '0.9em'
    },

    '&$inline': {
      '&, & p': {
        display: 'inline'
      }
    },
    '& p': {
      margin: '.5rem 0'
    }
  },
  'inline': {}
}))
