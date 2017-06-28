import { createSheet } from '../../theme'

export const styles = createSheet(({ borders }) => ({
  method: {
    borderBottom: `1px solid ${borders.default}`,
    margin: '0 1rem 2rem 0',
    padding: '1rem',

    '& > h3': {
      marginBottom: '15px'
    }
  }
}))
