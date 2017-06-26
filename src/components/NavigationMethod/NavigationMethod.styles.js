import { createSheet } from '../../theme'

export const styles = createSheet(({ shades }) => ({
  navigationMethod: {
    display: 'flex',
    padding: '.7rem 1.5rem',
    fontSize: 'smaller',
    color: '#FFF'
  },

  active: {
    backgroundColor: 'transparent' // FIXME:
  },

  open: {
    display: 'flex'
  },
  closed: {
    display: 'none'
  },
  type: {
    width: '55px'
  },
  title: {
    width: 'calc(100% - 55px)'
  }
}))
