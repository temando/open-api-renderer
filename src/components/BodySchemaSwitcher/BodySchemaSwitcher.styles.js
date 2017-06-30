import { createSheet } from '../../theme'

export const styles = createSheet(({ text }) => ({
  'schemaSwitcher': {
    marginBottom: '10px'
  },
  
  'select': {
    background: 'transparent',
    color: `${text.default}`,
    border: `1px solid ${text.default}`,
    borderRadius: '5px',
    marginLeft: '15px',
    fontSize: 'medium'
  }
}))
