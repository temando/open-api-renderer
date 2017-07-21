import injectSheet, { jss } from 'react-jss'
import c from 'color'

export const theme = (() => {
  const backgrounds = {
    default: c('#FFFFFF'),
    nav: c('#FFFFFF'),
    header: c('#FFFFFF'),
    schema: c('#F0F0F0'),
    example: c('#111111')
  }

  const text = {
    default: c('#4c555a'),
    secondary: c('#4c555a').lighten(0.5),
    tertiary: c('#4c555a').lighten(0.1),
    description: c('#4c555a').lighten(0.3),
    reversed: c('#FFFFFF'),
    link: c('#69e'),
    get: c('#17c680'),
    post: c('#2a9bdd'),
    put: c('#c428d6'),
    delete: c('#dd133f'),
    success: c('rgb(76, 204, 79)'),
    error: c('rgb(235, 15, 40)')
  }

  const shades = {
    default: c(backgrounds.default).darken(0.2)
  }

  const borders = {
    default: shades.default,
    secondary: c(shades.default).lighten(0.1),
    strong: c('#808080')
  }

  // http://www.modularscale.com/?1&em&1.25
  const sizes = {
    breakpoint: '800px',
    h1: '3.418rem',
    h2: '2.734rem',
    h3: '2.188rem',
    h4: '1.75rem',
    text: '1.4rem',
    smaller: '1.12rem'
  }

  return { backgrounds, text, shades, borders, sizes }
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
