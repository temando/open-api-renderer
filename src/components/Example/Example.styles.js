import { createSheet } from '../../theme'

export const styles = createSheet(({ backgrounds, text }) => ({
  'example': {
    backgroundColor: `${backgrounds.example}`,
    color: `${text.reversed}`,
    padding: '1rem'
  },

  'buttons': {
    opacity: '0.5',
    position: 'relative',
    textAlign: 'right',
    paddingRight: '1rem',
    marginBottom: '1rem',

    '& > span': {
      color: `${text.reversed}`,
      padding: '.2rem 1rem',
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
