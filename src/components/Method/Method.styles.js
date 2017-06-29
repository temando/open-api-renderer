import { createSheet } from '../../theme'
import c from 'color'

export const styles = createSheet(({ borders, text }) => ({
  method: {
    borderBottom: `1px solid ${borders.default}`,
    margin: '0 1rem 2rem 0',
    padding: '1rem',

    '& > h3': {
      marginBottom: '15px'
    },

    '& h4': {
      fontSize: 'smaller',
      textTransform: 'uppercase',
      color: `${c(text.default).lighten(0.5)}`,
      borderBottom: `1px solid ${borders.default}`,
      marginTop: '10px'
    }
  }
}))
