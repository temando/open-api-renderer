import { createSheet } from '../../theme'

export const styles = createSheet(({ backgrounds, borders }) => ({
  'securityContainer': {
    padding: '1rem 1rem',
    borderBottom: `1px solid ${borders.default}`
  },
  'scheme': {
    display: 'inline-block',
    marginLeft: '.5rem',
    backgroundColor: `${backgrounds.nav}`
  },

  'flowType': {
    padding: '0 1rem',

    '& + &': {
      borderTop: `1px dotted ${borders.default}`
    }
  },

  inlinePairs: {
    padding: '0 1rem'
  },

  scopes: {
    '& > li > span': {
      padding: '0 1rem',
      fontWeight: 600
    },
    padding: '0 1rem'
  },

  simple: {
    padding: '0 1rem'
  }
}))
