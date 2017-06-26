import { createSheet } from '../../theme'
import { styles as indicator } from '../Indicator/Indicator.styles'

export const styles = createSheet(({ shades }) => ({
  'response': {
    marginBottom: '5px',
    bodyContent: {
      margin: '10px 0 20px 20px'
    }
  },
  'info': {
    padding: '10px',

    [`& ${indicator.classes.indicator}`]: {
      marginRight: '10px'
    }
  },
  'isClickable': {
    cursor: 'pointer'
  },
  'code': {
    paddingRight: '20px'
  },
  'success': {
    color: 'rgb(76, 204, 79)'
  },
  'error': {
    color: 'rgb(235, 15, 40)'
  }
}))
