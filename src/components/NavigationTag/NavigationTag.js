import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
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
    const isHashDiff = this.props.hash !== nextProps.hash
    const isExpandedStatusDiff = this.props.shouldBeExpanded !== nextProps.shouldBeExpanded

    return isHashDiff || isExpandedStatusDiff
  }

  componentWillMount () {
    const { title, methods, hash, onClick } = this.props

    if (!methods) {
      return null
    }

    const method = methods.find(
      (method) => (`#${method.link}` === hash)
    )

    if (method) {
      onClick(title)
    }
  }

  handleClick (e) {
    this.props.onClick(this.props.title)
  }

  render () {
    const { title, description, shouldBeExpanded, methods, hash, classes, onClickMethod, navigationMethodDisplayType } = this.props

    // If tag has any method that matches hash, then it is considered active
    let isActiveTag = false
    if (methods) {
      isActiveTag = methods.some(method => (`#${method.link}` === hash))
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
        <div className={classNames(classes.navigationTagMethods, {
          [classes.expanded]: isExpanded
        })}>
          {methods && methods.map((method) => {
            const isActive = (`#${method.link}` === hash)

            return <NavigationMethod
              key={method.link}
              method={method}
              isActive={isActive}
              isOpen={isExpanded}
              navigationMethodDisplayType={navigationMethodDisplayType}
              onClick={onClickMethod} />
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
  hash: PropTypes.string.isRequired,
  classes: PropTypes.object,
  navigationMethodDisplayType: PropTypes.string,
  onClickMethod: PropTypes.func
}
