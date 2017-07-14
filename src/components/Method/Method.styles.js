import { createSheet } from '../../theme'
import c from 'color'

export const styles = createSheet(({ borders, text, sizes }) => ({
  method: {
    borderBottom: `1px solid ${borders.default}`,
    margin: '0 1rem 2rem 0',
    padding: '1rem 0',

    '& > h3': {
      display: 'inline-block',
      margin: '0 1.5rem .5rem 0'
    },

    '& h4': {
      fontSize: 'smaller',
      textTransform: 'uppercase',
      color: `${c(text.default).lighten(0.5)}`,
      borderBottom: `1px solid ${borders.default}`,
      marginTop: '1rem'
    }
  },

  [`@media (max-width: ${sizes.breakpoint})`]: {
    'method': {
      padding: '1rem',
      margin: 0
    }
  }
}))
