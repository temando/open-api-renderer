import { createSheet } from '../../theme'
import c from 'color'

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
        color: `${c(text.default).lighten(0.5)}`
      }
    }
  },

  'active': {
    backgroundColor: `${backgrounds.schema}`,
    borderRadius: '1rem 1rem 0 0'
  }
}))
