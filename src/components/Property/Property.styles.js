import { createSheet } from '../../theme'

export const treeLineWidth = '1px'
export const treeBorderStyle = `${treeLineWidth} solid red`
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

export const styles = createSheet(({ borders }) => ({
  'name': {
    ...nameAndInfo,
    width: '1%',
    whiteSpace: 'nowrap',
    position: 'relative',

    '&::before': {
      content: '""',
      display: 'inline-block',
      verticalAlign: 'middle',
      borderTop: `${treeBorderStyle}`,
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
        borderLeft: `${treeBorderStyle}`,
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
        borderLeft: `${treeBorderStyle}`,
        position: 'absolute',
        bottom: '0',
        left: '0',
        height: '52%'
      }
    },
    '&:last-child, &$last': {
      '& $name::after': {
        content: '""',
        borderLeft: `${treeBorderStyle}`,
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
        borderTop: `1px solid ${borders.default}`
      },
      '& $name::after': {
        content: '""',
        borderLeft: `${treeBorderStyle}`,
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

  /* Tree */

  'enum': { ...enumAndDefault },
  'default': { ...enumAndDefault },
  'indicator': {},
  'format': {},
  'subType': {},
  'constraints': {}
}))
