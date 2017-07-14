import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Servers from '../Servers/Servers'
import Indicator from '../Indicator/Indicator'
import { styles } from './MethodPath.styles'

@styles
export default class MethodPath extends PureComponent {
  constructor (props) {
    super(props)

    this.onClickPath = this.onClickPath.bind(this)

    this.state = {
      isServersExpanded: false
    }
  }

  render () {
    const {type, path, paths, classes} = this.props

    let indicatorDirection = 'downn'
    if (this.state.isServersExpanded) {
      indicatorDirection = 'up'
    }

    return (
      <div className={classNames(classes.methodPath)}>
        <div  onClick={this.onClickPath}>
          <span className={classNames(type, 'methodType')}>{type}</span>
          <span className='path'>{path}</span>
          <Indicator direction={indicatorDirection} />
        </div>
        {paths &&
          <div className={classNames(classes.methodServers, {
            [classes.expanded]: this.state.isServersExpanded
          })}>
            <Servers servers={paths} />
          </div>
        }
      </div>
    )
  }

  onClickPath () {
    this.setState({
      isServersExpanded: !this.state.isServersExpanded
    })
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
