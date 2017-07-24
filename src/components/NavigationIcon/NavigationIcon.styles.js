import { createSheet } from '../../theme'

export const styles = createSheet(({ backgrounds, sizes }) => ({
  navigationIcon: {
    display: 'none',
    fontSize: '1.6rem'
  },

  [`@media (max-width: ${sizes.breakpoint})`]: {
    'navigationIcon': {
      display: 'inline-block',
      width: '24px',
      height: '24px',
      color: `${backgrounds.default}`,
      position: 'fixed',
      top: '10px',
      left: '11px',
      cursor: 'pointer',
      zIndex: '1000'
    }
  }
}))
