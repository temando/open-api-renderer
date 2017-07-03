import { createSheet } from '../../theme'

export const styles = createSheet(() => ({
  'contentContainer': {
    padding: '20px 0',

    '& h2': {
      paddingLeft: '2rem'
    }
  },

  '@media (max-width: 800px)': {
    'contentContainer': {
      padding: '10px 0',

      '& h2': {
        paddingLeft: '1rem',
        margin: 0
      }
    }
  }
}))
