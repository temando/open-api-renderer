import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Description from '../Description/Description'
import ExternalLink from '../ExternalLink/ExternalLink'
import './Header.scss'

export default class Header extends PureComponent {
  render () {
    const { title, version, description, info, specUrl } = this.props

    return (
      <header id='header'>
        <h1>{title}</h1>

        <dl className='inline-pairs'>
          <dt>Version</dt>
          <dd>{version}</dd>
          {info && info.contact && this.renderContact(info.contact)}
          {info && info.license && this.renderLicense(info.license)}
        </dl>

        {description && <Description description={description} />}

        <nav>
          <ExternalLink href={specUrl}>Download OpenAPI definition</ExternalLink>
          {info && info.termsOfService &&
          <ExternalLink href={info.termsOfService}>Terms of Service</ExternalLink>}
        </nav>
      </header>
    )
  }

  /**
   * The contact object has no required fields, so the logic is a bit meh as
   * they are several permutations to consider.
   *
   * @param {Object} contact
   */
  renderContact (contact) {
    const elements = [<dt key='contact'>Contact</dt>]

    if (contact.name && contact.url) {
      elements.push(
        <dd key='contact-value'>
          <ExternalLink href={contact.url}>{contact.name}</ExternalLink>
          {contact.email && `(${contact.email})`}
        </dd>
      )
    } else if (contact.name) {
      elements.push(
        <dd key='contact-value'>{contact.name}</dd>
      )
    } else if (contact.url) {
      elements.push(
        <dd key='contact-value'>
          <ExternalLink href={contact.url}>{contact.url}</ExternalLink>
          {contact.email && `(${contact.email})`}
        </dd>
      )
    } else if (contact.email) {
      elements.push(
        <dd key='contact-value'>
          <ExternalLink href={`mailto:${contact.email}`}>{contact.email}</ExternalLink>
        </dd>
      )
    }

    return elements
  }

  renderLicense (license) {
    return [
      <dt key='license'>License</dt>,
      <dd key='license-value'>
        {license.url && <ExternalLink href={license.url}>{license.name}</ExternalLink>}
        {!license.url && license.name}
      </dd>
    ]
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  description: PropTypes.string,
  info: PropTypes.shape({
    contact: PropTypes.object,
    license: PropTypes.object,
    termsOfService: PropTypes.string
  }),
  specUrl: PropTypes.string.isRequired
}
