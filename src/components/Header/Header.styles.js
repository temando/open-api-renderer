import { applyTheme } from '../../theme'

export const styles = applyTheme(({ shades }) => ({
  'header': {
    padding: '0 20px',

    '& h1': {
      marginBottom: '.5rem'
    },

    '& nav a': {
      display: 'inline-block',
      marginRight: '.5rem'
    }
  }
}))
