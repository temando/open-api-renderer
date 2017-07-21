import { createSheet } from '../../theme'

export const styles = createSheet(({ sizes }) => ({
  'contentContainer': {
    padding: '0.5rem 2rem',
    margin: '1rem 0',

    '& h2': {
      margin: '.5rem 0'
    }
  },

  [`@media (max-width: ${sizes.breakpoint})`]: {
    'contentContainer': {
      padding: '0.5rem 1rem',
      '& h2': {
        margin: 0
      }
    }
  }
}))
