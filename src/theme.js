import c from 'color'

export const theme = {
  backgrounds: {
    default: c('#FFFFFF'),
    nav: c('#FFFFFF'),
    header: c('#FFFFFF'),
    schema: c('#F0F0F0'),
    example: c('#111111')
  },

  text: {
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
  },

  // http://www.modularscale.com/?1.4&em&1.25
  sizes: {
    breakpoint: '800px',
    h1: '3.418rem',
    h2: '2.734rem',
    h3: '2.188rem',
    h4: '1.75rem',
    text: '1.4rem',
    smaller: '1.12rem'
  }
}

theme.shades = {
  default: c(theme.backgrounds.default).darken(0.2)
}

theme.borders = {
  default: theme.shades.default,
  secondary: c(theme.shades.default).lighten(0.1),
  strong: c('#808080')
}
