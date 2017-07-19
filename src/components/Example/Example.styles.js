import { createSheet } from '../../theme'

export const styles = createSheet(({ backgrounds, text }) => ({
  'example': {
    backgroundColor: `${backgrounds.example}`,
    color: `${text.reversed}`,
    padding: '10px'
  },

  'buttons': {
    opacity: '0.5',
    position: 'relative',
    textAlign: 'right',
    paddingRight: '10px',
    marginBottom: '10px',

    '& > span': {
      color: `${text.reversed}`,
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
