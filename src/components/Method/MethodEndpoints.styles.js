export const styles = theme => ({
  methodEndpoints: {
    display: 'inline-block',
    fontFamily: 'monospace',
    fontSize: `${theme.sizes.h3}`,
    margin: '0 0 .5rem',
    position: 'relative',

    '&:hover': {
      textDecoration: 'underline'
    },

    '& .methodType': {
      textTransform: 'uppercase',
      marginRight: '1rem',
      '&.get': {
        color: `${theme.text.get}`
      },
      '&.post': {
        color: `${theme.text.post}`
      },
      '&.put': {
        color: `${theme.text.put}`
      },
      '&.delete': {
        color: `${theme.text.delete}`
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
    top: '2.5rem',
    left: '0',
    zIndex: '5'
  },

  [`@media (max-width: ${theme.sizes.breakpoint})`]: {
    'methodEndpoints': {
      display: 'block'
    },
    expanded: {
      width: 'calc(100% - 1rem)'
    }
  }
})
