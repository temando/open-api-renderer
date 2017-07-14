import { createSheet } from '../../theme'
import c from 'color'

export const styles = createSheet(({borders, backgrounds, text, sizes}) => ({
  endpoints: {
    minWidth: '300px',
    backgroundColor: `${c(backgrounds.schema).darken(0.1)}`,
    padding: '15px'
  }
}))
