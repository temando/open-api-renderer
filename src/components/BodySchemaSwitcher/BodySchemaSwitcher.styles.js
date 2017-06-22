import { applyTheme } from '../../theme'

export const styles = applyTheme(({ shades }) => ({
  'select': {
    background: 'transparent',
    color: 'white',
    border: '1px solid white',
    borderRadius: '5px',
    marginLeft: '15px',
    fontSize: 'medium'
  }
}))
