import React, { Component } from 'react'
import PropTypes from 'prop-types'

import NavigationTag from '../NavigationTag/NavigationTag'

import './Navigation.scss'

export default class Navigation extends Component {
  constructor (props) {
    super(props)

    this.onClick = this.onClick.bind(this)

    this.state = {
      expandedTags: []
    }
  }

  render () {
    const { navigation, location } = this.props
    const { expandedTags } = this.state

    return (
      <nav className='nav'>
        {navigation && navigation.map((tag) => {
          let status
          if (expandedTags.includes(tag.title)) {
            status = 'right'
          }

          return (
            <NavigationTag
              key={tag.title}
              title={tag.title}
              methods={tag.methods}
              status={status}
              onClick={this.onClick}
              location={location}
            />
          )
        })}
      </nav>
    )
  }

  /**
   * Responsible for updating the state of the navigation with all
   * expanded tags.
   *
   * @param {string} tagTitle
   */
  onClick (tagTitle) {
    const { expandedTags } = this.state

    if (expandedTags.includes(tagTitle)) {
      const newExpanded = expandedTags.filter((prop) => prop !== tagTitle)
      this.setState({ expandedTags: newExpanded })
    } else {
      this.setState({ expandedTags: [...expandedTags, tagTitle] })
    }
  }
}

Navigation.propTypes = {
  navigation: PropTypes.array,
  location: PropTypes.object
}
