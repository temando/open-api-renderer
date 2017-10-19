import c from 'color'
import { styles as Base } from '../../containers/Base/Base.styles'
import { styles as Overlay } from '../../components/Overlay/Overlay.styles'

const headerHeight = '41px'
const headerBackground = '#234f69'
const headerColor = `${c(headerBackground).lighten(0.75)}`
const headerBorder = `${c(headerColor).darken(0.2)}`
const headerTitleColor = c('#FFF')

export const styles = theme => ({
  '@global': {
    'html': {
      fontSize: '62.5%'
    },

    'body': {
      margin: 0,
      padding: 0
    }
  },

  demo: {
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",helvetica,sans-serif;',
    lineHeight: '1.4',

    [`& .${Base(theme).base}`]: {
      marginTop: `${headerHeight}`
    }
  },

  dialog: {
    [`& .${Overlay(theme).overlay}`]: {
      zIndex: '2',
      transition: 'background 0.5s',
      background: headerBackground,
      paddingTop: '70px'
    },

    '& textarea': {
      padding: '1rem',
      fontSize: '1.6rem',
      fontFamily: 'monospace',
      border: '0',
      borderBottom: '1px solid rgba(0,0,0,0.25)',
      width: '70%',
      background: 'rgba(0,0,0, 0.15)',
      boxShadow: '0 4px 22px rgba(0,0,0,0.09)',
      height: '70%',
      color: '#ccc',
      resize: 'none'
    },

    '& button': {
      marginTop: '2rem',
      padding: '0.8em 1.4em 0.7em',
      fontSize: '1.3rem',
      boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
      marginRight: '1em'
    },

    '& label': {
      fontSize: '1.4rem',
      color: `${headerTitleColor}`
    },

    '& input': {
      display: 'inline-block',
      width: '50%',
      padding: '0.5rem',
      fontSize: '1.4rem',
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
    }
  },

  toggleButtons: {
    position: 'absolute',
    top: '4px',
    right: '1rem',

    '& pencil': {
      position: 'relative'
    }
  },

  button: {
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
  },

  closeButton: {
    color: '#b63b3b',
    borderColor: '#b63b3b'
  },

  inputButton: {
    marginLeft: '.5rem',
    background: 'none',
    border: 'none',
    color: `${headerTitleColor}`,
    cursor: 'pointer',

    '&:hover': {
      transition: 'all .2s',
      color: `${headerColor}`
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

    padding: '.7rem 1rem',

    borderBottom: '1px solid #222',
    boxShadow: '0 1px 20px rgba(0,0,0,0.35)',

    '&, & *': {
      boxSizing: 'border-box'
    },

    '& h1': {
      margin: '0 1rem 0 0',
      fontSize: '2.7rem',
      textTransform: 'lowercase',
      fontVariant: 'small-caps',
      fontWeight: '100',
      lineHeight: '0.9'
    },

    '& small': {
      color: `${headerColor}`,
      fontStyle: 'italic',
      fontSize: '1.3rem'
    }
  },

  '@media (max-width: 800px)': {
    'header': {
      display: 'table',
      zIndex: '100',

      '& h1': {
        display: 'inline',
        paddingLeft: '30px'
      },

      '& small': {
        display: 'none'
      },

      '& form': {
        display: 'flex',
        marginLeft: 0,
        textAlign: 'left',
        alignItems: 'center',

        '& label': {
          padding: '10px 0'
        },

        '& input': {
          flexShrink: 10,
          height: '38px'
        }
      }
    },
    'dialog': {
      '& label': {
        display: 'block'
      },
      '& input': {
        width: '90%',
        textAlign: 'left'
      }
    }
  }
})
