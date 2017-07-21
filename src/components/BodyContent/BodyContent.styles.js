import c from 'color'

export const styles = theme => ({
  'bodyContent': {
    display: 'table',
    width: '100%',
    padding: '1rem 0',
    boxSizing: 'border-box'
  },

  'tabs': {
    '& > div': {
      display: 'inline-block',
      padding: '1rem 2rem',
      cursor: 'pointer',

      '&:not($active)': {
        color: `${c(theme.text.secondary)}`
      }
    }
  },

  'active': {
    backgroundColor: `${theme.backgrounds.schema}`,
    borderRadius: '1rem 1rem 0 0'
  }
})
