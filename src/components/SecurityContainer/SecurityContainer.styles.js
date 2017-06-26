import { createSheet } from '../../theme'

export const styles = createSheet(({ shades }) => ({
  'securityContainer': {
    padding: '1rem 0',
    marginBottom: '2rem',
    borderBottom: '1px solid $border-color'

  },
  'scheme': {
    display: 'inline-block',
    padding: '.4rem',
    marginLeft: '.5rem',
    backgroundColor: '$navigation-background'
  },

  'flowType': {
    padding: '1rem 0',

    '& + &': {
      borderTop: '1px dotted $border-color'
    }
  },

  inlinePairs: {},
  scopes: {}
}))
