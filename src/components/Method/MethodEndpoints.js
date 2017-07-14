import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Endpoints from '../Endpoints/Endpoints'
import Indicator from '../Indicator/Indicator'
import { styles } from './MethodEndpoints.styles'

@styles
export default class MethodEndpoints extends PureComponent {
  constructor (props) {
    super(props)

    this.onClickPath = this.onClickPath.bind(this)

    this.state = {
      isServersExpanded: false
    }
  }

  render () {
    const {type, path, endpoints, classes} = this.props

    let indicatorDirection = 'downn'
    if (this.state.isServersExpanded) {
      indicatorDirection = 'up'
    }

    return (
      <div className={classNames(classes.methodEndpoints)}>
        <div onClick={this.onClickPath}>
          <span className={classNames(type, 'methodType')}>{type}</span>
          <span className='path'>{path}</span>
          <Indicator direction={indicatorDirection} />
        </div>
        {endpoints &&
          <div className={classNames(classes.methodServers, {
            [classes.expanded]: this.state.isServersExpanded
          })}>
            <Endpoints endpoints={endpoints} />
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

MethodEndpoints.propTypes = {
  type: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  endpoints: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    description: PropTypes.string
  })),
  classes: PropTypes.object
}
