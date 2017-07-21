export const styles = theme => ({
  'navigationMethod': {
    display: 'flex',
    padding: '.7rem 1.5rem',
    fontSize: `${theme.sizes.text}`
  },
  'active': {
    backgroundColor: `${theme.backgrounds.schema}`
  },
  'open': {
    display: 'flex',
    flexWrap: 'wrap'
  },
  'closed': {
    display: 'none'
  },
  'type': {
    width: '6rem',
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
    }
  },
  'path': {
    width: 'calc(100% - 6rem)'
  },
  'title': {
    width: '100%',
    '&.short': {
      width: 'calc(100% - 6rem)'
    }
  }
})
