import { createSheet } from '../../theme'

export const styles = createSheet(({ borders, sizes }) => ({
  'page': {
    display: 'table',
    width: '100%',
    height: '100%'
  },
  'main': {
    display: 'table-cell',
    width: '80%',
    boxSizing: 'border-box',
    border: `1px solid ${borders.default}`
  },

  [`@media (max-width: ${sizes.breakpoint})`]: {
    'page': {
      display: 'block'
    },

    'main': {
      display: 'block',
      width: '100%',
      position: 'relative',
      left: 0,
      opacity: 1,
      transition: 'left .5s, opacity 2s'
    },

    'isHidden': {
      left: '100%',
      position: 'fixed',
      opacity: 0
    }
  }
}))
