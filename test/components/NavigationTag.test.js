import React from 'react'
import NavigationTag from './../../src/components/NavigationTag/NavigationTag'
import renderer from 'react-test-renderer'

describe('<NavigationTag />', () => {
  const location = {
    hash: '#pets'
  }

  it('renders with minimum props', () => {
    const tree = renderer.create(
      <NavigationTag title='pets' onClick={jest.fn()} location={location} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders with methods', () => {
    const methods = [{
      type: 'get',
      title: 'Get pets',
      link: 'pets'
    },
    {
      type: 'get',
      title: 'Get pets',
      link: 'pets/:id'
    }]

    const tree = renderer.create(
      <NavigationTag title='pets' onClick={jest.fn()} location={location} methods={methods} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders with description', () => {
    const tree = renderer.create(
      <NavigationTag title='Pets' handle='pets' description='Access to Pets' onClick={jest.fn()} location={location} />
    )

    expect(tree).toMatchSnapshot()
  })
})
