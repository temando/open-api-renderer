import injectSheet, { jss } from 'react-jss'
import c from 'color'

const dry = {}

export const theme = (() => {
  const backgrounds = {
    default: dry.bg = c('#fff'),
    nav: c('#fff'),
    header: c('#fff'),
    schema: c('#F0F0F0')
  }

  const text = {
    default: c('#4c555a'),
    link: c('#69e')
  }

  const shades = {
    default: dry.shade = c(dry.bg).darken(0.2)
  }

  const borders = {
    default: dry.shade
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
