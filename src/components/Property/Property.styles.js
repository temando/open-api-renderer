import { createSheet } from '../../theme'

const nameAndInfo = {
  verticalAlign: 'middle',
  paddingRight: '$cell-padding'
}

const enumAndDefault = {
  display: 'inline-block',
  padding: '0 5px',
  margin: '2px 3px',
  border: '1px solid grey'
}

export const styles = createSheet(({ shades }) => ({
  'name': {
    ...nameAndInfo,
    width: '1%',
    whiteSpace: 'nowrap',
    position: 'relative',

    '&::before': {
      content: '',
      display: 'inline-block',
      verticalAlign: 'middle',
      borderTop: '$tree-border-style',
      width: '2 * $cell-padding'
    },

    '& span': {
      display: 'inline-block',
      paddingRight: '$cell-padding',
      lineHeight: '$line-height',
      verticalAlign: 'middle',

      '&:first-child::before': {
        content: '',
        display: 'inline-block',
        width: '$cell-padding',
        height: '$tree-line-width + 7',
        verticalAlign: 'middle',
        borderLeft: '$tree-border-style',
        position: 'relative',
        bottom: '2px'
      }
    }
  },

  'info': {
    ...nameAndInfo,
    width: '75%'
  },

  'property': {
    '&:first-child': {
      '& $name::after': {
        content: '""',
        borderLeft: '$tree-border-style',
        position: 'absolute',
        bottom: '0',
        left: '0',
        height: '52%'
      }
    },
    '&:last-child, &$last': {
      '& $name::after': {
        content: '""',
        borderLeft: '$tree-border-style',
        position: 'absolute',
        top: '0',
        left: '0',
        height: '49%'
      }
    },
    '&:only-of-type': {
      '& $name::after': {
        border: 'none'
      }
    },
    '&:first-child$last': {
      '& $name::after': {
        border: 'none'
      }
    },
    '& + &': {
      '& $info': {
        borderTop: '1px solid $border-color'
      }
    }
  },

  'required': {
    marginLeft: '10px',
    color: 'red'
  },

  'isClickable': {
    cursor: 'pointer',
    fontWeight: 'bold'
  },

  'last': {},

  /* Tree */

  '@global': {
    // TODO: refactor so that these fancy rules are not needed
    // '$property + $property, .body-schema-subset + $property': {
    //   '& $name::after': {
    //     content: '""',
    //     borderLeft: '$tree-border-style',
    //     position: 'absolute',
    //     bottom: '0',
    //     left: '0',
    //     height: '100%'
    //   }
    // },

    '.body-schema-subset > td': {
      borderLeft: '$tree-border-style'
    }

    // '$last + .body-schema-subset > td': {
    //   borderLeft: 'none'
    // }
  },

  'enum': { ...enumAndDefault },
  'default': { ...enumAndDefault },
  'indicator': {},
  'format': {},
  'subType': {}
}))

// TODO: compare this to ensure it matches scss
