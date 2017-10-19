export const styles = theme => ({
  'summary': {
    lineHeight: '1.4',
    fontSize: `${theme.sizes.h4}`,
    marginBottom: '1rem'
  },

  'description': {
    lineHeight: '1.2',
    fontSize: `${theme.sizes.text}`,
    marginBottom: '1rem'
  },

  'value': {
    backgroundColor: `${theme.backgrounds.example}`,
    color: `${theme.text.reversed}`,
    padding: '1rem'
  },

  'buttons': {
    opacity: '0.5',
    position: 'relative',
    textAlign: 'right',
    paddingRight: '1rem',
    marginBottom: '1rem',

    '& > span': {
      color: `${theme.text.reversed}`,
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
})
