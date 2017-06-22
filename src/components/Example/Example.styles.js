import { createSheet } from '../../theme'

export const styles = createSheet(({ shades }) => ({

  'root': {
    backgroundColor: 'rgb(17, 17, 17)',
    color: 'white',
    padding: '10px'
  },

  'buttons': {
    opacity: '0',
    position: 'relative',
    textAlign: 'right',
    paddingRight: '10px',

    '&:$hovered': { opacity: '1' },
    '& > span': {
      color: 'white',
      padding: '2px 10px',
      cursor: 'pointer'
    }
  },

  hovered: {}
}))
