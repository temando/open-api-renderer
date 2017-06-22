
import { applyTheme } from '../../theme'

export const styles = applyTheme(({ shades }) => ({
  description: {
    '&$inline': {
      '&, & p': {
        display: 'inline'
      }
    },
    '& p': {
      margin: '.5rem 0'
    }
  },
  inline: {}
}))
