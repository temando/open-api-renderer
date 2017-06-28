import { createSheet } from '../../theme'
import { treeBorderStyle, styles as property } from '../Property/Property.styles'

export const styles = createSheet(() => ({
  'bodySchema': {
    width: '100%',
    borderSpacing: '0',
    padding: '10px 50px 10px 20px',
    boxSizing: 'border-box',
    // color: '#d0d4d7',
    borderRadius: '10px'
  },

  'even': {
    // backgroundColor: '#2D3134'
    backgroundColor: '#FFF'
  },
  'odd': {
    backgroundColor: '#F0F0F0'
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
