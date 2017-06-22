
import { createSheet } from '../../theme'

export const styles = createSheet(({ shades }) => ({
  'description': {
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
