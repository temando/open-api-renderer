import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual'
import NavigationTag from '../NavigationTag/NavigationTag'
import NavigationMethod from '../NavigationMethod/NavigationMethod'
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
    const isHashDiff = this.props.hash !== nextProps.hash
    const isTagsDiff = !isEqual(nextState.expandedTags, this.state.expandedTags)

    return isHashDiff || isTagsDiff
  }

  render () {
    const { navigation, hash, classes } = this.props
    const { expandedTags } = this.state

    return (
      <nav className={classes.navigation}>
        {navigation && navigation.map((tag) => {
          // Handle a navigation that doesn't require tags.
          if (!tag.methods) {
            const isActive = (`#${tag.link}` === location.hash)
            return (
              <NavigationMethod key={tag.link} method={tag} isActive={isActive} isOpen />
            )
          }

          // Otherwise the navigation is grouped by tag.
          return (
            <NavigationTag
              key={tag.title}
              title={tag.title}
              description={tag.description}
              methods={tag.methods}
              shouldBeExpanded={expandedTags.includes(tag.title)}
              onClick={this.onClick}
              hash={hash}
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
  hash: PropTypes.string,
  classes: PropTypes.object
}
