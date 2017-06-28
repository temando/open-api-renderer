import { createSheet } from '../../theme'
import { styles as indicator } from '../Indicator/Indicator.styles'

export const styles = createSheet(({ backgrounds, borders, text }) => ({
  navigation: {
    width: '20%',
    height: '100%',
    verticalAlign: 'top',
    backgroundColor: `${backgrounds.nav}`,
    position: 'fixed',
    boxSizing: 'border-box',
    overflowY: 'auto',

    [`& ${indicator.classes.indicator}`]: {
      float: 'right',
      display: 'block',
      marginTop: '5px'
    },

    '& > div + div': {
      borderTop: `1px solid ${borders.default}`
    },

    '& a': {
      color: `${text.default}`
    }
  }
}))
