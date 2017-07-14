import React from 'react'
import Docs from './../../src/components/Docs/Docs'
import renderer from 'react-test-renderer'

describe('<Docs />', () => {
  it('renders docs', () => {
    const tree = renderer.create(
      <Docs url='http://www.google.com' />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders docs with description', () => {
    const tree = renderer.create(
      <Docs url='http://www.google.com' description='Hello world' />
    )

    expect(tree).toMatchSnapshot()
  })
})
