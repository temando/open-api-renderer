import injectSheet, { jss } from 'react-jss'

export const theme = {
  backgrounds: {
    default: '#fff',
    nav: '#eee',
    header: '#ddd'
  },

  shades: {
    default: '#aaa'
  },

  link: '#adf'
}

/**
 * FIXME: This only exists because react-jss doesnt do themes yet
 * as a central place to refactor
 */
export function createSheet (styles) {
  const sheet = jss.createStyleSheet(styles(theme))

  const decorator = (...args) => injectSheet(sheet)(...args)

  Object.assign(decorator, sheet)

  return decorator
}
