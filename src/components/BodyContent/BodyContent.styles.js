import { createSheet } from '../../theme'
import c from 'color'

export const styles = createSheet(({ text, backgrounds }) => ({
  'bodyContent': {
    display: 'table',
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box'
  },

  'tabs': {
    '& > div': {
      display: 'inline-block',
      padding: '10px 20px',
      cursor: 'pointer',

      '&:not($active)': {
        color: `${c(text.default).lighten(0.5)}`
      }
    }
  },

  'active': {
    backgroundColor: `${backgrounds.schema}`,
    borderRadius: '10px 10px 0 0'
  }
}))
