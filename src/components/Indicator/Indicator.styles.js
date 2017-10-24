export const styles = theme => ({
  indicator: {
    display: 'inline',
    verticalAlign: 'middle',
    width: '15px',
    height: '15px',

    '& img': {
      width: '15px',
      marginLeft: '1em'
    },

    '&:hover': {
      cursor: 'pointer'
    },

    '&$up img': { transform: 'rotate(180deg)' },
    '&$right img': { transform: 'rotate(-90deg)' }
  },

  up: {},
  right: {}
})
