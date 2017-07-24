import { createSheet } from '../../theme'
import { styles as indicator } from '../Indicator/Indicator.styles'

export const styles = createSheet(({ text, sizes }) => ({
  'response': {
    marginBottom: '.5rem',
    bodyContent: {
      margin: '1rem 0 2rem 2rem'
    }
  },
  'info': {
    padding: '1rem',
    fontSize: `${sizes.text}`,

    [`& ${indicator.classes.indicator}`]: {
      marginRight: '1rem'
    }
  },
  'isClickable': {
    cursor: 'pointer'
  },
  'code': {
    paddingRight: '2rem'
  },
  'success': {
    '& $code': {
      color: `${text.success}`
    }
  },
  'error': {
    '& $code': {
      color: `${text.error}`
    }
  }
}))
