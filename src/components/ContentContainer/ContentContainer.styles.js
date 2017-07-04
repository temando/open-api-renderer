import { createSheet } from '../../theme'

export const styles = createSheet(({ sizes }) => ({
  'contentContainer': {
    padding: '20px 0',

    '& h2': {
      paddingLeft: '2rem'
    }
  },

  [`@media (max-width: ${sizes.breakpoint})`]: {
    'contentContainer': {
      padding: '10px 0',

      '& h2': {
        paddingLeft: '1rem',
        margin: 0
      }
    }
  }
}))
