import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Servers from '../Servers/Servers'
import { styles } from './Method.styles'

@styles
export default class MethodPath extends PureComponent {
  render () {
    const {type, path, paths} = this.props

    return (
      <div>
        <span className={type}>{type}</span>
        <span className='path'>{path}</span>
        {paths && <Servers servers={paths} />}
      </div>
    )
  }
}

MethodPath.propTypes = {
  type: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  paths: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
  })),
  classes: PropTypes.object
}
