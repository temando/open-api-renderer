import { createSheet } from '../../theme'

export const styles = createSheet(({borders, text, sizes}) => ({
  methodPath: {
    display: 'inline-block',
    fontFamily: 'monospace',
    marginLeft: '30px',
    position: 'relative',

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
    // outline: '1px solid red',
    display: 'block',
    position: 'absolute',
    backgroundColor: 'white'
  }
}))
