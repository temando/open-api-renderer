import { createSheet } from '../../theme'
import c from 'color'

export const styles = createSheet((theme) => ({
  base: {
    backgroundColor: `${theme.backgrounds.default}`,
    color: `${theme.text.default}`,
    height: '100%',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",helvetica,sans-serif;',
    lineHeight: '1.4'
  },

  '@global': {
    'html': {
      fontSize: '62.5%'
    },

    'p, li, a, code, dt, dd, h5, h6': {
      fontSize: `${theme.sizes.text}`
    },

    'ul, ol': {
      margin: '.5rem 0',
      padding: '0',

      '& li': {
        marginLeft: '1.5rem'
      }
    },

    'h3, h4, h5, h6': {
      margin: '0',
      fontWeight: '400'
    },

    'h1, h1 *': {
      fontSize: `${theme.sizes.h1}`
    },

    'h2, h2 *': {
      fontSize: `${theme.sizes.h2}`
    },

    'h3, h3 *': {
      fontSize: `${theme.sizes.h3}`
    },

    'h4, h4 *': {
      fontSize: `${theme.sizes.h4}`
    },

    'a': {
      color: `${theme.text.link}`,
      textDecoration: 'none',

      '&:hover': {
        transition: 'color .25s',
        color: `${c(theme.text.link).lighten(0.1)}`,
        textDecoration: 'underline'
      }
    }
  }
}))
