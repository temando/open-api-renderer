import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Indicator from '../Indicator/Indicator'
import NavigationMethod from '../NavigationMethod/NavigationMethod'
import Description from '../Description/Description'
import { styles } from './NavigationTag.styles'

@styles
export default class NavigationTag extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  shouldComponentUpdate (nextProps, nextState) {
    const isHashDiff = this.props.location.hash !== nextProps.location.hash
    const isExpandedStatusDiff = this.props.shouldBeExpanded !== nextProps.shouldBeExpanded

    return isHashDiff || isExpandedStatusDiff
  }

  componentWillMount () {
    const { title, methods, location, onClick } = this.props

    if (!methods) {
      return null
    }

    const method = methods.find(
      (method) => (`#${method.link}` === location.hash)
    )

    if (method) {
      onClick(title)
    }
  }

  handleClick (e) {
    this.props.onClick(this.props.title)
  }

  render () {
    const { title, description, shouldBeExpanded, methods, location, classes } = this.props

    // If tag has any method that matches location hash, then it is considered active
    let isActiveTag = false
    if (methods) {
      isActiveTag = methods.some(method => (`#${method.link}` === location.hash))
    }

    let isExpanded = false
    if (shouldBeExpanded || isActiveTag) {
      isExpanded = true
    }

    let indicatorDirection
    if (isExpanded) {
      indicatorDirection = 'bottom'
    } else {
      indicatorDirection = 'right'
    }

    return (
      <div>
        <a
          className={classes.navigationTag}
          href={`#${title}`}
          onClick={this.handleClick}
        >
          <span>{title}</span>
          <Indicator direction={indicatorDirection} />
          {description && <Description description={description} />}
        </a>
        <div className={classes.navigationTagMethods}>
          {methods && methods.map((method) => {
            const isActive = (`#${method.link}` === location.hash)

            return <NavigationMethod key={method.link} method={method} isActive={isActive} isOpen={isExpanded} />
          })}
        </div>
      </div>
    )
  }
}

NavigationTag.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  methods: PropTypes.array,
  shouldBeExpanded: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  classes: PropTypes.object
}
