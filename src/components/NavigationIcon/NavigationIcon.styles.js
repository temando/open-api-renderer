export const styles = theme => ({
  navigationIcon: {
    display: 'none',
    fontSize: '1.6rem'
  },

  [`@media (max-width: ${theme.sizes.breakpoint})`]: {
    'navigationIcon': {
      display: 'inline-block',
      width: '24px',
      height: '24px',
      color: `${theme.backgrounds.default}`,
      position: 'fixed',
      top: '10px',
      left: '11px',
      cursor: 'pointer',
      zIndex: '1000'
    }
  }
})
