import c from 'color'

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
export function applyTheme (styles) { return styles(theme) }
