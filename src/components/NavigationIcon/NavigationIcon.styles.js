import { createSheet } from '../../theme'

export const styles = createSheet(({ backgrounds, sizes }) => ({
  navigationIcon: {
    display: 'none'
  },

  [`@media (max-width: ${sizes.breakpoint})`]: {
    'navigationIcon': {
      display: 'inline-block',
      width: '24px',
      height: '24px',
      color: `${backgrounds.default}`,
      position: 'fixed',
      top: '15px',
      left: '15px',
      cursor: 'pointer',
      zIndex: '1000'
    }
  }
}))
