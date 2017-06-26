import { createSheet } from '../../theme'

export const styles = createSheet(({ shades }) => ({
  indicator: {
    display: 'inline',
    verticalAlign: 'middle',
    width: '15px',
    height: '15px',

    '& img': {
      width: '15px',
      marginLeft: '1em'
    },

    '&$up img': { transform: 'rotate(180deg)' },
    '&$right img': { transform: 'rotate(-90deg)' }
  },

  up: {},
  right: {}
}))
