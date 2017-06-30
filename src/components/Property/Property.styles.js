import { createSheet } from '../../theme'
import c from 'color'

const lineHeight = '40px'
const cellPadding = '10px'

const nameAndInfo = {
  verticalAlign: 'middle',
  paddingRight: `${cellPadding}`
}

const enumAndDefault = {
  display: 'inline-block',
  padding: '0 5px',
  margin: '2px 3px',
  border: '1px solid grey'
}

export const styles = createSheet(({ borders, backgrounds, text }) => ({
  'name': {
    ...nameAndInfo,
    width: '1%',
    whiteSpace: 'nowrap',
    position: 'relative',

    '&::before': {
      content: '""',
      display: 'inline-block',
      verticalAlign: 'middle',
      borderTop: `1px solid ${borders.default}`,
      width: '20px'
    },

    '& span': {
      display: 'inline-block',
      paddingRight: `${cellPadding}`,
      lineHeight,
      verticalAlign: 'middle',

      '&:first-child::before': {
        content: '""',
        display: 'inline-block',
        width: `${cellPadding}`,
        height: `8px`,
        verticalAlign: 'middle',
        borderLeft: `1px solid ${borders.default}`
      }
    }
  },

  'info': {
    ...nameAndInfo,
    width: '75%'
  },

  'additionalInfo': {
    fontSize: '0.9em',
    color: `${c(text.default).lighten(0.5)}`,
    padding: '5px 0',

    '& a': {
      cursor: 'pointer'
    }
  },

  'constraints': {
    marginLeft: '5px',
    fontSize: '.9rem',
    '& > span > span': {
      padding: '2px',
      backgroundColor: `${c(borders.default).lighten(0.1)}`,
      marginLeft: '5px'
    }
  },

  'property': {
    '&:first-child': {
      '& $name::after': {
        content: '""',
        borderLeft: `1px solid ${borders.default}`,
        position: 'absolute',
        bottom: '0',
        left: '0',
        height: '51%'
      }
    },
    '&:last-child, &$last': {
      '& $name::after': {
        content: '""',
        borderLeft: `1px solid ${borders.default}`,
        position: 'absolute',
        top: '0',
        left: '0',
        height: '50%'
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
        borderTop: `1px solid ${borders.default}`
      },
      '& $name::after': {
        content: '""',
        borderLeft: `1px solid ${borders.default}`,
        position: 'absolute',
        bottom: '0',
        left: '0',
        height: '100%'
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

  'enum': { ...enumAndDefault },
  'default': { ...enumAndDefault },
  'indicator': {},
  'format': {},
  'subType': {}
}))
