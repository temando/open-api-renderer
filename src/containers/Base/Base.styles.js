import { createSheet } from '../../theme'

export const styles = createSheet(({ shades }) => ({
  base: {},

  '@global': {

    'html, body > div, $main': {
      height: '100%'
    },

    'body': {
      height: '100%',
      margin: '0',
      padding: '0',
      fontFamily: '$body-font',
      lineHeight: '1.4',
      color: 'white'
    },

    '$main': {
      backgroundColor: '$content-background'
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
      color: '$link-color',
      textDecoration: 'none',

      '&:hover': {
        transition: 'color .25s',
        color: `lighten($link-color, 20%)`,
        textDecoration: 'underline'
      }
    }

    // .inline-pairs {
    //   display: 'inline-flex',
    //   margin: '1em 0',
    //   padding: '0',
    //   border-bottom: '1px solid $border-color',
    // }

    // .inline-pairs dt,
    // .inline-pairs dd {
    //   margin: '0',
    //   padding: '.5rem',
    //   border-top: '1px solid $border-color',
    // }

    // .inline-pairs dt {
    //   padding-right: '1.5rem',
    //   font-weight: 'bold',
    // }

  }

}))
