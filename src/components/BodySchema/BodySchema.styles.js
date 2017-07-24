import { createSheet } from '../../theme'
import { styles as property } from '../Property/Property.styles'

export const styles = createSheet(({ backgrounds, borders, sizes }) => ({
  'bodySchema': {
    width: '100%',
    borderSpacing: '0',
    paddingRight: '1rem',
    boxSizing: 'border-box',
    borderRadius: '1rem',
    fontSize: `${sizes.text}`,

    '& td': {
      padding: '.5rem 1rem'
    }
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
        left: '1rem',
        height: '100%'
      }
    },

    [`& > td`]: {
      position: 'relative'
    },

    [`& > td::before`]: {
      content: '""',
      borderLeft: `1px solid ${borders.default}`,
      padding: '0',
      position: 'absolute',
      top: 0,
      left: '1rem',
      bottom: 0
    },

    [`& > td > table`]: {
      marginLeft: '1rem'
    },

    [`.${property.classes.last} + & > td`]: {
      paddingTop: 0
    },

    [`.${property.classes.last} + & > td::before`]: {
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

  'isAdditional': {
    textAlign: 'left',
    fontStyle: 'italic',
    fontSize: `${sizes.smaller}`,
    paddingBottom: '0.5rem'
  },

  [`@media (max-width: ${sizes.breakpoint})`]: {
    'bodySchema': {
      paddingRight: '2rem'
    }
  }
}))
