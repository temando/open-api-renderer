import c from 'color'
import { createSheet } from '../../theme'
import { styles as base } from '../../containers/Base/Base.styles'

const headerHeight = '50px'
const headerBackground = '#234f69'
const headerColor = `${c(headerBackground).lighten(0.75)}`
const headerBorder = `${c(headerColor).darken(0.2)}`
const headerTitleColor = c('#FFF')

export const styles = createSheet(({ shades }) => ({
  demo: {
    [`& .${base.classes.base}`]: {
      marginTop: `${headerHeight}`
    }
  },

  header: {
    position: 'fixed',
    width: '100%',
    top: '0',
    left: '0',
    display: 'flex',
    height: `${headerHeight}`,
    alignItems: 'baseline',
    background: `${headerBackground}`,
    zIndex: '999',
    color: `${headerTitleColor}`,

    padding: '.4rem 1rem',

    borderBottom: '1px solid #222',
    boxShadow: '0 1px 20px #8e8e8e',

    '&, & *': {
      boxSizing: 'border-box'
    },

    '& h1': {
      margin: '0 .5rem 0 0',
      fontSize: '1.5rem',
      textTransform: 'lowercase',
      fontVariant: 'small-caps',
      fontWeight: '100'
    },

    '& small': {
      color: `${headerColor}`,
      fontStyle: 'italic'
    },

    '& form': {
      flex: '1',
      marginLeft: '6.7rem',
      textAlign: 'right'
    },

    '& small, & label': {
      fontSize: 'smaller'
    },

    '& input': {
      display: 'inline-block',
      width: '50%',
      padding: '0.5em',
      fontSize: '.9rem',
      border: '0',
      borderBottom: `1px solid ${headerBorder}`,
      outline: '0',
      margin: '0 .5rem',
      color: `${headerColor}`,
      background: 'none',

      '&:focus, &:hover': {
        transition: 'all .2s',
        color: '#FFF',
        borderBottomColor: '#FFF'
      }
    },

    '& button': {
      background: 'none',
      border: `2px solid ${headerBorder}`,
      borderRadius: '3px',
      fontSize: 'smaller',
      padding: '.25rem .5rem',
      color: `${headerColor}`,
      cursor: 'pointer',

      '&:hover': {
        transition: 'all .2s',
        color: '#FFF',
        borderColor: '#FFF'
      }
    }
  }
}))
