import { createSheet } from '../../theme'

export const styles = createSheet(({ sizes }) => ({
  'contentContainer': {
    padding: '0.5rem 2rem',
    margin: '1rem 0'
  },

  [`@media (max-width: ${sizes.breakpoint})`]: {
    'contentContainer': {
      '& h2': {
        margin: 0
      }
    }
  }
}))
