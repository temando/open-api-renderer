import React from 'react'
import Property from './../../src/components/Property/Property'
import renderer from 'react-test-renderer'

describe('<Property />', () => {
  it('can render a basic property', () => {
    const tree = renderer.create(
      <Property name={'type'} types={['string']} isRequired isLast />
    )

    expect(tree).toMatchSnapshot()
  })

  it('can render a property with enum', () => {
    const tree = renderer.create(
      <Property
        name={'packagingType'}
        types={['string']}
        enumValues={['box', 'carton']}
        isRequired />
    )

    expect(tree).toMatchSnapshot()
  })

  it('can render a property with a subtype', () => {
    const tree = renderer.create(
      <Property
        name={'data'}
        types={['array']}
        subtype={'object'}
        isRequired={false} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('can render a property with description', () => {
    const tree = renderer.create(
      <Property
        name={'type'}
        types={['string']}
        description={'This is _markdown_ text'}
        isRequired />
    )

    expect(tree).toMatchSnapshot()
  })

  it('can render a property with numerical constraints', () => {
    const tree = renderer.create(
      <Property
        name={'type'}
        types={['number']}
        constraints={{multipleOf: 2}}
        isRequired />
    )

    expect(tree).toMatchSnapshot()
  })

  it('can render a property with multiple types', () => {
    const tree = renderer.create(
      <Property
        name={'value'}
        types={['string', 'number']}
        isRequired={false} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('can render a property with a format', () => {
    const tree = renderer.create(
      <Property
        name={'value'}
        constraints={{format: 'email'}}
        types={['string']}
        isRequired={false} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('can render a property with docs', () => {
    const docs = {
      description: 'Hello',
      url: 'http://example.org'
    }

    const tree = renderer.create(
      <Property
        name={'value'}
        docs={docs}
        types={['string']}
        isRequired={false} />
    )

    expect(tree).toMatchSnapshot()
  })
})
