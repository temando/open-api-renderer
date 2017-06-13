import React from 'react'
import Description from './../../src/components/Description/Description'
import renderer from 'react-test-renderer'

describe('<Description />', () => {
  it('renders text with no commonmark as html', () => {
    const text = 'This method has zero markdown.'
    const tree = renderer.create(
      <Description description={text} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders commonmark text as html', () => {
    const text = 'This method has some `var i = 0` _markdown_, including a [link](http://www.google.com).'
    const tree = renderer.create(
      <Description description={text} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders text inline if asked', () => {
    const text = 'This method has zero markdown.'
    const tree = renderer.create(
      <Description isInline description={text} />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
