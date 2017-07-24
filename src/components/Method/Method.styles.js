import { createSheet } from '../../theme'

export const styles = createSheet(({ borders, text, sizes }) => ({
  method: {
    borderBottom: `1px solid ${borders.secondary}`,
    margin: '0 1rem 2rem 0',
    padding: '1rem 0',

    '& > h3': {
      display: 'inline-block',
      margin: '0 1.5rem .5rem 0'
    },

    '& h4': {
      fontSize: `${sizes.text}`,
      textTransform: 'uppercase',
      color: `${text.secondary}`,
      borderBottom: `1px solid ${borders.secondary}`,
      marginTop: '1.5rem'
    }
  },

  [`@media (max-width: ${sizes.breakpoint})`]: {
    'method': {
      padding: '1rem 0',
      margin: 0
    }
  }
}))
