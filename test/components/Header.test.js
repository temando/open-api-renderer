import React from 'react'
import Header from './../../src/components/Header/Header'
import renderer from 'react-test-renderer'

describe('<Header />', () => {
  const title = 'Swagger Petstore'
  const version = '1.0.0'
  const specUrl = 'https://temando.github.io/open-api-renderer/petstore-open-api-v3.0.0-RC1.json'

  it('renders header with minimum props', () => {
    const tree = renderer.create(
      <Header title={title} version={version} specUrl={specUrl} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders license information (name)', () => {
    const info = {
      license: {
        name: 'Apache 2.0'
      }
    }
    const tree = renderer.create(
      <Header title={title} version={version} specUrl={specUrl} info={info} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders license information (name, url)', () => {
    const info = {
      license: {
        name: 'Apache 2.0',
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
      }
    }
    const tree = renderer.create(
      <Header title={title} version={version} specUrl={specUrl} info={info} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders contact information (name)', () => {
    const info = {
      contact: {
        name: 'ACME Company'
      }
    }
    const tree = renderer.create(
      <Header title={title} version={version} specUrl={specUrl} info={info} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders contact information (url)', () => {
    const info = {
      contact: {
        url: 'http://example.org'
      }
    }
    const tree = renderer.create(
      <Header title={title} version={version} specUrl={specUrl} info={info} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders contact information (email)', () => {
    const info = {
      contact: {
        email: 'hello@example.org'
      }
    }
    const tree = renderer.create(
      <Header title={title} version={version} specUrl={specUrl} info={info} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders contact information (name, url)', () => {
    const info = {
      contact: {
        name: 'ACME Company',
        url: 'http://example.org'
      }
    }
    const tree = renderer.create(
      <Header title={title} version={version} specUrl={specUrl} info={info} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders contact information (name, url, email)', () => {
    const info = {
      contact: {
        name: 'ACME Company',
        url: 'http://example.org',
        email: 'hello@example.org'
      }
    }
    const tree = renderer.create(
      <Header title={title} version={version} specUrl={specUrl} info={info} />
    )

    expect(tree).toMatchSnapshot()
  })
})
