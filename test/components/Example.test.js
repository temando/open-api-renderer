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

  it('renders the summary only', () => {
    const tree = renderer.create(
      <Example examples={[{'summary': 'This is a test summary.'}]} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders the description only', () => {
    const tree = renderer.create(
      <Example examples={[{'description': 'This is a test description.'}]} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders a string example', () => {
    let tree = renderer.create(
      <Example examples={[{'value': '<message>hi</message>'}]} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders a JSON example', () => {
    const tree = renderer.create(
      <Example examples={[{'value':{'message': 'hi'}}]} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders a string example with a summary', () => {
    let tree = renderer.create(
      <Example examples={[{'summary': 'This is a test summary.', 'value': '<message>hi</message>'}]} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders a JSON example with a summary', () => {
    const tree = renderer.create(
      <Example examples={[{'summary': 'This is a test summary.', 'value':{'message': 'hi'}}]} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders a string example with a description', () => {
    let tree = renderer.create(
      <Example examples={[{'description': 'This is a test description.', 'value': '<message>hi</message>'}]} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders a JSON example with a description', () => {
    const tree = renderer.create(
      <Example examples={[{'description': 'This is a test description.', 'value':{'message': 'hi'}}]} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders a string example with a summary and a description', () => {
    let tree = renderer.create(
      <Example examples={[{'summary': 'This is a test summary.', 'description': 'This is a test description.', 'value': '<message>hi</message>'}]} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders a JSON example with a summary and a description', () => {
    const tree = renderer.create(
      <Example examples={[{'summary': 'This is a test summary.', 'description': 'This is a test description.', 'value':{'message': 'hi'}}]} />
    )

    expect(tree).toMatchSnapshot()
  })
})
