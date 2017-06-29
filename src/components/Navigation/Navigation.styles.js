import { createSheet } from '../../theme'
import { styles as indicator } from '../Indicator/Indicator.styles'
import c from 'color'

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
      color: `${text.default}`,
      padding: '.7rem 1rem',
      '&:hover': {
        color: `${c(text.default).lighten(0.1)}`,
        transition: 'all .2s'
      }
    }
  }
}))
