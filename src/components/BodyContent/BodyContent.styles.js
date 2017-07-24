import { createSheet } from '../../theme'

export const styles = createSheet(({ text, backgrounds, sizes }) => ({
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
        color: `${text.secondary}`
      }
    }
  },

  'active': {
    backgroundColor: `${backgrounds.schema}`,
    borderRadius: '1rem 1rem 0 0'
  }
}))
