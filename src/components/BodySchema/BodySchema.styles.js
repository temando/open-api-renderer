import { createSheet } from '../../theme'
import { styles as property } from '../Property/Property.styles'

export const styles = createSheet(({ backgrounds, borders, sizes }) => ({
  'bodySchema': {
    width: '100%',
    borderSpacing: '0',
    padding: '10px 50px 10px 20px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    fontSize: '14.5px'
  },

  'even': {
    backgroundColor: `${backgrounds.default}`
  },
  'odd': {
    backgroundColor: `${backgrounds.schema}`
  },

  'subset': {
    [`& + .${property.classes.property}:not(.${property.classes.last})`]: {
      [`& .${property.classes.name}::after`]: {
        content: '""',
        borderLeft: `1px solid ${borders.default}`,
        position: 'absolute',
        bottom: '0',
        left: '0',
        height: '100%'
      }
    },

    [`& > td`]: {
      borderLeft: `1px solid ${borders.default}`
    },

    [`.${property.classes.last} + & > td`]: {
      borderLeft: 'none'
    }
  },

  'array': {
    fontFamily: 'monospace',
    padding: '5px 10px'
  },
  'hasTabs': {
    borderTopLeftRadius: 0
  },

  [`@media (max-width: ${sizes.breakpoint})`]: {
    'bodySchema': {
      paddingRight: '10px',
      fontSize: '0.8rem'
    }
  },

  'isAdditional': {
    textAlign: 'left',
    fontStyle: 'italic'
  }
}))
