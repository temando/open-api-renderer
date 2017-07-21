import { styles as indicator } from '../Indicator/Indicator.styles'

export const styles = theme => ({
  navigation: {
    display: 'table-cell',
    width: '20%',
    height: '100%',
    verticalAlign: 'top',
    backgroundColor: `${theme.backgrounds.nav}`,
    position: 'fixed',
    boxSizing: 'border-box',
    overflowY: 'auto',

    [`& ${indicator.classes.indicator}`]: {
      float: 'right',
      display: 'block',
      marginTop: '5px'
    },

    '& > div + div': {
      borderTop: `1px solid ${theme.borders.default}`
    },

    '& a': {
      color: `${theme.text.default}`,
      padding: '.7rem 1rem',
      '&:hover': {
        color: `${c(theme.text.tertiary)}`,
        transition: 'all .2s'
      }
    }
  },

  [`@media (max-width: ${theme.sizes.breakpoint})`]: {
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
})
