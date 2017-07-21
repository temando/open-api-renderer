import { createSheet } from '../../theme'
import { styles as property } from '../Property/Property.styles'

export const styles = createSheet(({ backgrounds, borders, sizes }) => ({
  'bodySchema': {
    width: '100%',
    borderSpacing: '0',
    padding: '0 4rem 0 1rem',
    boxSizing: 'border-box',
    borderRadius: '1rem',
    fontSize: `${sizes.text}`
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

    [`& > td > table`]: {
      marginLeft: '1rem'
    },

    [`.${property.classes.last} + & > td`]: {
      borderLeft: 'none'
    }
  },

  'array': {
    fontFamily: 'monospace',
    fontSize: '1.6rem',
    padding: '.5rem 1rem'
  },

  'hasTabs': {
    borderTopLeftRadius: 0
  },

  [`@media (max-width: ${sizes.breakpoint})`]: {
    'bodySchema': {
      paddingRight: '22px'
    }
  },

  'isAdditional': {
    textAlign: 'left',
    fontStyle: 'italic'
  }
}))
