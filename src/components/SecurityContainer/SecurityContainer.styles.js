import { createSheet } from '../../theme'
import { styles as indicator } from '../Indicator/Indicator.styles'

export const styles = createSheet(({ text, sizes }) => ({
  'securityContainer': {
    marginBottom: '.5rem',
    bodyContent: {
      margin: '1rem 0 2rem 2rem'
    }
  },
  'info': {
    padding: '1rem',
    fontSize: `${sizes.text}`,
    display: 'inline-flex',
    [`& ${indicator.classes.indicator}`]: {
      marginRight: '1rem'
    }
  },

  isClickable: {
    cursor: 'pointer'
  },

  flowType: {
    padding: '0 1rem'
  },

  inlinePairs: {
    padding: '0 1rem'
  },

  scopes: {
    '& > li > span': {
      padding: '0 1rem',
      fontWeight: 600
    },
    padding: '0 1rem'
  },

  simple: {
    padding: '0 1rem'
  }
}))
