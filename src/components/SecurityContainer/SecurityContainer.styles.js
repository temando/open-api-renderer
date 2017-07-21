export const styles = theme => ({
  'securityContainer': {
    padding: '1rem 0',
    borderBottom: `1px solid ${theme.borders.default}`
  },
  'scheme': {
    display: 'inline-block',
    marginLeft: '.5rem',
    backgroundColor: `${theme.backgrounds.nav}`
  },

  'flowType': {
    padding: '1rem 0',

    '& + &': {
      borderTop: `1px dotted ${theme.borders.default}`
    }
  },

  inlinePairs: {},
  scopes: {
    '& > li > span': {
      fontWeight: 600
    }
  }
})
