import React from 'react'
import Example from './../../src/components/Example/Example'
import renderer from 'react-test-renderer'

describe('<Example />', () => {
  it('renders nothing when there is no examples passed', () => {
    const tree = renderer.create(
      <Example examples={[]} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders a string example', () => {
    let tree = renderer.create(
      <Example examples={['<message>hi</message>']} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders a JSON example', () => {
    const tree = renderer.create(
      <Example examples={[{'message': 'hi'}]} />
    )

    expect(tree).toMatchSnapshot()
  })
})
