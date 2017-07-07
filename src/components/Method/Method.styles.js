import { createSheet } from '../../theme'
import c from 'color'

export const styles = createSheet(({ borders, text, sizes }) => ({
  method: {
    borderBottom: `1px solid ${borders.default}`,
    margin: '0 1rem 2rem 0',
    padding: '1rem 2rem',

    '& > h3': {
      marginBottom: '15px',
      '& > span': {
        fontFamily: 'monospace',
        textTransform: 'uppercase',
        marginLeft: '10px',

        '&.get': {
          color: `${text.get}`
        },
        '&.post': {
          color: `${text.post}`
        },
        '&.put': {
          color: `${text.put}`
        },
        '&.delete': {
          color: `${text.delete}`
        }
      }
    },

    '& h4': {
      fontSize: 'smaller',
      textTransform: 'uppercase',
      color: `${c(text.default).lighten(0.5)}`,
      borderBottom: `1px solid ${borders.default}`,
      marginTop: '20px'
    }
  },

  [`@media (max-width: ${sizes.breakpoint})`]: {
    'method': {
      padding: '1rem',
      margin: 0
    }
  }
}))
