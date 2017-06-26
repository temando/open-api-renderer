
import { createSheet } from '../../theme'

export const styles = createSheet(() => ({
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
