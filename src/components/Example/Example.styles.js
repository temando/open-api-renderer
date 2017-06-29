import { createSheet } from '../../theme'

export const styles = createSheet(() => ({

  'example': {
    backgroundColor: 'rgb(17, 17, 17)',
    color: 'white',
    padding: '10px'
  },

  'buttons': {
    opacity: '0.5',
    position: 'relative',
    textAlign: 'right',
    paddingRight: '10px',
    marginBottom: '10px',

    '& > span': {
      color: 'white',
      padding: '2px 10px',
      cursor: 'pointer'
    }
  },

  hovered: {
    '&$buttons': {
      transition: 'all .2s',
      opacity: '1'
    }
  }
}))
