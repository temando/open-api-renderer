import React from 'react'
import Example from './../../src/components/Example/Example'
import ReactShallowRenderer from 'react-test-renderer/shallow'

describe('<Example />', () => {
  const shallow = new ReactShallowRenderer()
  it('renders nothing when there is no examples passed', () => {
    const tree = shallow.render(
      <Example examples={[]} />
    )

    expect(tree).toBeNull()
  })

  it('renders a string example', () => {
    let tree = shallow.render(
      <Example examples={['<message>hi</message>']} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders a JSON example', () => {
    const tree = shallow.render(
      <Example examples={[{'message': 'hi'}]} />
    )

    expect(tree).toMatchSnapshot()
  })
})
