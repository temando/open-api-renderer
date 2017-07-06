import React from 'react'
import BodySchema from './../../src/components/BodySchema/BodySchema'
import renderer from 'react-test-renderer'

describe('<BodySchema />', () => {
  const keyProperty = {
    name: 'key',
    required: false,
    type: [ 'string' ]
  }
  const additionalProperty = {
    name: 'additionalProperties',
    required: false,
    type: [ 'integer' ],
    constraints: {
      format: 'int32'
    }
  }

  it('can render a basic BodySchema', () => {
    const tree = renderer.create(
      <BodySchema styleVariation='even' properties={[keyProperty]} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('can render a basic BodySchema with additional properties', () => {
    const properties = [
      {
        ...keyProperty,
        additionalProperties: additionalProperty
      }
    ]
    const tree = renderer.create(
      <BodySchema styleVariation='even' properties={properties} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('can render a BodySchema with a subset', () => {
    const properties = [
      {
        name: 'customAttributes',
        required: true,
        type: [ 'array' ],
        properties: [
          keyProperty
        ]
      }
    ]
    const tree = renderer.create(
      <BodySchema styleVariation='even' properties={properties} />
    )

    expect(tree).toMatchSnapshot()

    // Simulate expanding customAttributes
    tree.toJSON().children[0].children[0].props.onClick('customAttributes')

    expect(tree).toMatchSnapshot()

    // Simulate collapsing customAttributes
    tree.toJSON().children[0].children[0].props.onClick('customAttributes')

    expect(tree).toMatchSnapshot()
  })

  it('can render a BodySchema with a subset and no additional properties', () => {
    const properties = [
      {
        additionalProperties: false,
        name: 'customAttributes',
        required: true,
        type: [ 'array' ],
        properties: [
          keyProperty
        ]
      }
    ]
    const tree = renderer.create(
      <BodySchema styleVariation='even' properties={properties} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('can render a BodySchema with a subset and additional properties', () => {
    const properties = [
      {
        additionalProperties: additionalProperty,
        name: 'customAttributes',
        required: true,
        type: [ 'array' ],
        properties: [
          keyProperty
        ]
      }
    ]
    const tree = renderer.create(
      <BodySchema styleVariation='even' properties={properties} />
    )

    expect(tree).toMatchSnapshot()
  })
})
