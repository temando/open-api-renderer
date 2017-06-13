import React from 'react'
import PropertyConstraints from './../../src/components/PropertyConstraints/PropertyConstraints'
import renderer from 'react-test-renderer'

describe('<PropertyConstraints />', () => {
  it('renders required constraint', () => {
    let tree = renderer.create(
      <PropertyConstraints type={['string']} isRequired />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders array constraints', () => {
    const tree = renderer.create(
      <PropertyConstraints type={['array']} isRequired={false} constraints={{uniqueItems: true}} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders numeric constraints', () => {
    const tree = renderer.create(
      <PropertyConstraints type={['numeric']} isRequired={false} constraints={{minimum: 2}} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders object constraints', () => {
    const tree = renderer.create(
      <PropertyConstraints type={['object']} isRequired={false} constraints={{minProperties: 2}} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders string constraints', () => {
    const tree = renderer.create(
      <PropertyConstraints type={['string']} isRequired={false} constraints={{pattern: '^[a-zA-Z0-9_-]+$'}} />
    )

    expect(tree).toMatchSnapshot()
  })
})
