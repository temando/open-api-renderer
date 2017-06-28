import { createSheet } from '../../theme'
import { treeBorderStyle, styles as property } from '../Property/Property.styles'

export const styles = createSheet(() => ({
  'bodySchema': {
    width: '100%',
    borderSpacing: '0',
    padding: '10px 50px 10px 20px',
    boxSizing: 'border-box'
  },

  'even': {
    backgroundColor: 'rgb(27, 37, 52)'
  },
  'odd': {
    backgroundColor: 'rgb(14, 24, 39)'
  },

  'subset': {
    [`& + .${property.classes.property}:not(.${property.classes.last})`]: {
      [`& .${property.classes.name}::after`]: {
        content: '""',
        borderLeft: `${treeBorderStyle}`,
        position: 'absolute',
        bottom: '0',
        left: '0',
        height: '100%'
      }
    },

    [`& > td`]: {
      borderLeft: `${treeBorderStyle}`
    },

    [`.${property.classes.last} + & > td`]: {
      borderLeft: 'none'
    }
  }
}))
