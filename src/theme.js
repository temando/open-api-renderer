import injectSheet, { jss } from 'react-jss'

export const theme = {
  backgrounds: {
    default: 'rgb(14, 24, 39)',
    nav: 'rgb(19, 32, 51)',
    header: '#ddd'
  },

  shades: {
    default: '#aaa'
  },

  borders: {
    default: 'rgba(255, 255, 255, 0.3)'
  },

  link: 'rgb(126, 211, 244)'
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
