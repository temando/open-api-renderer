import { applyTheme } from '../../theme'

export const styles = applyTheme(({ backgrounds }) => ({
  'overlay': {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: backgrounds.default,

    padding: '15% 0 0',
    textAlign: 'center',
    textShadow: `1px 2px 2px rgba(#000, 0.5)`,

    '& h3': {
      fontStyle: 'italic',
      fontWeight: '300'
    },

    '& img': {
      width: '250px',
      height: '250px',
      opacity: '.4'
    }
  }
}))
