import { createSheet } from '../../theme'

export const styles = createSheet(({borders, text, sizes}) => ({
  methodEndpoints: {
    display: 'inline-block',
    fontFamily: 'monospace',
    fontSize: '1.2rem',
    margin: '0 0 .5rem',
    position: 'relative',

    '&:hover': {
      textDecoration: 'underline'
    },

    '& .methodType': {
      textTransform: 'uppercase',
      marginRight: '10px',
      '&.get': {
        color: `${text.get}`
      },
      '&.post': {
        color: `${text.post}`
      },
      '&.put': {
        color: `${text.put}`
      },
      '&.delete': {
        color: `${text.delete}`
      },
      '&.path': {
        textTransform: 'none'
      }
    }
  },
  methodServers: {
    display: 'none'
  },
  expanded: {
    display: 'block',
    position: 'absolute',
    top: '1.6rem',
    left: '0',
    zIndex: '5'
  },

  [`@media (max-width: ${sizes.breakpoint})`]: {
    'methodEndpoints': {
      display: 'block'
    },
    expanded: {
      width: 'calc(100% - 1rem)'
    }
  }
}))
