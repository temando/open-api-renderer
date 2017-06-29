import { createSheet } from '../../theme'
import c from 'color'

export const styles = createSheet(({ text }) => ({
  'bodyContent': {
    display: 'table',
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box'
  },

  'tabs': {
    '& > div': {
      display: 'inline-block',
      padding: '10px 20px 10px 0',
      cursor: 'pointer',

      '&:not($active)': {
        color: `${c(text.default).lighten(0.5)}`
      }
    }
  },

  'active': {
    textDecoration: 'underline'
  }
}))
