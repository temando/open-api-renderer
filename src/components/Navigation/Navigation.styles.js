import { createSheet } from '../../theme'
import { styles as indicator } from '../Indicator/Indicator.styles'
import c from 'color'

export const styles = createSheet(({ backgrounds, borders, text }) => ({
  navigation: {
    display: 'table-cell',
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
  },

  '@media (max-width: 800px)': {
    'navigation': {
      display: 'block',
      width: '100%',
      height: 'auto',
      right: '100%',
      zIndex: '99',
      transition: 'right .5s'
    },
    'isOpen': {
      position: 'relative',
      right: 0
    }
  }
}))
