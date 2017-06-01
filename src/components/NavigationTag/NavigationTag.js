import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Indicator from '../Indicator/Indicator'
import NavigationMethod from '../NavigationMethod/NavigationMethod'

import './NavigationTag.scss'

export default class NavigationTag extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount () {
    const { title, methods, location, onClick } = this.props

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
    const { title, status, methods, location } = this.props

    const isExpanded = (status === 'right')

    return (
      <div key={title}>
        <a
          className='nav-tag'
          href={`#${title}`}
          onClick={this.handleClick}
        >
          {title}
          <Indicator status={status} />
        </a>
        <div className='nav-tag-methods'>
          {isExpanded && methods && methods.map((method) => {
            const isActive = (`#${method.link}` === location.hash)

            return <NavigationMethod key={method.link} method={method} isActive={isActive} />
          })}
        </div>
      </div>
    )
  }
}

NavigationTag.propTypes = {
  title: PropTypes.string.isRequired,
  methods: PropTypes.array,
  status: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  location: PropTypes.object
}
