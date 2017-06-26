import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual'
import NavigationTag from '../NavigationTag/NavigationTag'
import { styles } from './Navigation.styles'

@styles
export default class Navigation extends Component {
  constructor (props) {
    super(props)

    this.onClick = this.onClick.bind(this)

    this.state = {
      expandedTags: []
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    const isHashDiff = this.props.location.hash !== nextProps.location.hash
    const isTagsDiff = !isEqual(nextState.expandedTags, this.state.expandedTags)

    return isHashDiff || isTagsDiff
  }

  render () {
    const { navigation, location, classes } = this.props
    const { expandedTags } = this.state

    return (
      <nav className={classes.navigation}>
        {navigation && navigation.map((tag) => {
          let shouldBeExpanded = false
          if (expandedTags.includes(tag.title)) {
            shouldBeExpanded = true
          }

          return (
            <NavigationTag
              key={tag.title}
              title={tag.title}
              description={tag.description}
              methods={tag.methods}
              shouldBeExpanded={shouldBeExpanded}
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
  location: PropTypes.object,
  classes: PropTypes.object
}
