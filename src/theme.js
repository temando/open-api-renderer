import injectSheet, { jss } from 'react-jss'
import c from 'color'

export const theme = (() => {
  const backgrounds = {
    default: c('#fff'),
    nav: c('#fff'),
    header: c('#fff'),
    schema: c('#F0F0F0')
  }

  const text = {
    default: c('#4c555a'),
    link: c('#69e'),
    get: c('#17c680'),
    post: c('#2a9bdd'),
    put: c('#c428d6'),
    delete: c('#dd133f')
  }

  const shades = {
    default: c(backgrounds.default).darken(0.2)
  }

  const borders = {
    default: shades.default
  }

  return { backgrounds, text, shades, borders }
})()

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
