import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Property from '../Property/Property'
import { styles } from './BodySchema.styles'

@styles
export default class BodySchema extends Component {
  constructor (props) {
    super(props)

    this.onClick = this.onClick.bind(this)

    let expandedProps = []
    const {properties, depthToExpand} = this.props

    if (depthToExpand > 0) {
      expandedProps = properties.map(property => property.name)
    }

    this.state = {
      expandedProps
    }
  }

  render () {
    const { properties, additionalProperties, styleVariation, classes, hasTabs, depthToExpand } = this.props

    if (!properties) {
      return null
    }

    const { expandedProps } = this.state
    const hasAdditionalProperties = properties.find(
      (property) => property.additionalProperties !== undefined
    )

    return (
      <table className={classNames(classes.bodySchema, classes[styleVariation], {
        [classes.hasTabs]: hasTabs
      })}>
        {hasAdditionalProperties && this.renderAdditionalPropertiesNotice(hasAdditionalProperties.additionalProperties)}
        <tbody>
          {properties.map((property, i) => {
            // We will never be last if there is additionalProperties to follow
            const isLast = hasAdditionalProperties ? false : (properties.length === i + 1)
            const hasProps = property.properties !== undefined
            const hasAdditional = property.additionalProperties !== undefined

            // Handle no properties and no additional properties
            if (!hasProps && !hasAdditional) {
              return this.renderPropertyRow(property, isLast)
            }

            // Handle additionalProperties only
            if (!hasProps && hasAdditional) {
              return this.renderProperties(property.additionalProperties, expandedProps, isLast, hasAdditional, depthToExpand)
            }

            // Handle properties and additional properties
            return this.renderProperties(property, expandedProps, isLast, hasAdditional, depthToExpand)
          })}
          {additionalProperties && this.renderProperties(additionalProperties, expandedProps, true, true)}
        </tbody>
      </table>
    )
  }

  /**
   * Displays a notice to users about additional properties that are possible within
   * the child of this schema.
   *
   * @param {Object|Boolean} additionalProperties
   */
  renderAdditionalPropertiesNotice (additionalProperties) {
    const { classes } = this.props

    if (additionalProperties === false) {
      return (
        <caption className={classes.additionalProperties}>These are the only possible properties:</caption>
      )
    }

    return (
      <caption className={classes.additionalProperties}>Additional properties are possible, as described below:</caption>
    )
  }

  /**
   * Renders a property, with additional smarts to know if the property itself
   * has a subset (because it's of type array or object). If the property is
   * expanded, then it's subset will be rendered as well.
   *
   * @see renderSubsetProperties
   * @param {Object} property
   * @param {Array} expandedProps
   * @param {Boolean} isLast
   * @param {Boolean} hasAdditional
   * @param {Number} depthToExpand
   */
  renderProperties (property, expandedProps = [], isLast = false, hasAdditional = false, depthToExpand) {
    const isPropertyArray = property.type && property.type.includes('array')
    const isPropertyObject = property.type && property.type.includes('object')

    if (isPropertyArray || isPropertyObject) {
      if (expandedProps.includes(property.name)) {
        return [
          this.renderPropertyRow(property, isLast, true, true),
          this.renderSubsetProperties(property, isPropertyArray, depthToExpand - 1)
        ]
      }

      return this.renderPropertyRow(property, isLast, false, true)
    }

    return this.renderPropertyRow(property, isLast, false, false, hasAdditional)
  }

  /**
   * Invokes the Property component, asking it to render the table row. Has a number
   * of parameters that merely help in turn styling aids on/off
   *
   * @param {Object} property
   * @param {Boolean} isLast
   * @param {Boolean} isOpen
   * @param {Boolean} hasSubset
   * @param {Boolean} isAdditionalProperties
   */
  renderPropertyRow (property, isLast, isOpen = false, hasSubset = false, isAdditionalProperties = false) {
    return (
      <Property
        key={property.name}
        name={property.name}
        type={property.type}
        subtype={property.subtype}
        description={property.description}
        enumValues={property.enum}
        defaultValue={property.defaultValue}
        constraints={property.constraints}
        onClick={hasSubset ? this.onClick : undefined}
        isRequired={property.required}
        isOpen={isOpen}
        isLast={isLast}
        isAdditional={isAdditionalProperties}
      />
    )
  }

  /**
   * Responsible for rendering array properties. This is usually only invoked
   * if the parent property has been clicked on and the user wants to see the
   * definition.
   *
   * @param {Object} property
   * @param {Boolean} isArray
   * @param {Number} depthToExpand
   */
  renderSubsetProperties (property, isArray = false, depthToExpand) {
    const { styleVariation, classes } = this.props
    const nextStyleVariation = (styleVariation === 'even') ? 'odd' : 'even'

    return (
      <tr className={classes.subset}>
        <td colSpan='100'>
          {isArray && <div className={classes.array}>Array [</div>}
          <BodySchema
            {...this.props}
            key={`${property.name}-properties`}
            properties={property.properties}
            additionalProperties={property.additionalProperties}
            styleVariation={nextStyleVariation}
            depthToExpand={depthToExpand}
          />
          {isArray && <div className={classes.array}>]</div>}
        </td>
      </tr>
    )
  }

  /**
   * Responsible for updating the state of all properties that
   * have been expanded by the user.
   *
   * @param {string} propertyName
   */
  onClick (propertyName) {
    const { expandedProps } = this.state

    if (expandedProps.includes(propertyName)) {
      const newExpanded = expandedProps.filter((prop) => prop !== propertyName)
      this.setState({ expandedProps: newExpanded })
    } else {
      this.setState({ expandedProps: [...expandedProps, propertyName] })
    }
  }
}

BodySchema.propTypes = {
  additionalProperties: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  properties: PropTypes.array,
  styleVariation: PropTypes.oneOf([
    'odd',
    'even'
  ]),
  classes: PropTypes.object,
  hasTabs: PropTypes.bool,
  depthToExpand: PropTypes.number
}
