import { createSheet } from '../../theme'

export const styles = createSheet(({ backgrounds, link }) => ({
  base: {
    backgroundColor: `${backgrounds.default}`,
    height: '100%'
  },

  '@global': {
    'html, body > div': {
      height: '100%'
    },

    'body': {
      height: '100%',
      margin: '0',
      padding: '0',
      fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",helvetica,sans-serif;',
      lineHeight: '1.4',
      color: 'white'
    },

    'ul, ol': {
      margin: '.5rem 0',
      padding: '0',

      '& li': {
        marginLeft: '1.5rem'
      }
    },

    'h3, h4, h5, h6': {
      margin: '0'
    },

    'a': {
      color: `${link}`,
      textDecoration: 'none',

      '&:hover': {
        transition: 'color .25s',
        color: `lighten(${link}, 20%)`,
        textDecoration: 'underline'
      }
    }
  }
}))
