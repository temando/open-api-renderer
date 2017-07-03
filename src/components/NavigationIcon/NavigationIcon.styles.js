import { createSheet } from '../../theme'

export const styles = createSheet(({ backgrounds }) => ({
  navigationIcon: {
    display: 'none'
  },

  '@media (max-width: 800px)': {
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
