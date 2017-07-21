import { createSheet } from '../../theme'

export const styles = createSheet(({ text }) => ({
  'schemaSwitcher': {
    marginBottom: '1rem'
  },

  'select': {
    background: 'transparent',
    color: `${text.default}`,
    border: `1px solid ${text.default}`,
    borderRadius: '.5rem',
    marginLeft: '1.5rem',
    fontSize: 'medium'
  }
}))
