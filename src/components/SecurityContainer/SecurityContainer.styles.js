import { createSheet } from '../../theme'

export const styles = createSheet(({ backgrounds, borders }) => ({
  'securityContainer': {
    padding: '1rem 2rem',
    borderBottom: `1px solid ${borders.default}`

  },
  'scheme': {
    display: 'inline-block',
    padding: '.4rem',
    marginLeft: '.5rem',
    backgroundColor: `${backgrounds.nav}`
  },

  'flowType': {
    padding: '1rem 0',

    '& + &': {
      borderTop: `1px dotted ${borders.default}`
    }
  },

  inlinePairs: {},
  scopes: {}
}))
