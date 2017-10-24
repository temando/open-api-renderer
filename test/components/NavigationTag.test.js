import React from 'react'
import NavigationTag from './../../src/components/NavigationTag/NavigationTag'
import renderer from 'react-test-renderer'

describe('<NavigationTag />', () => {
  const hash = '#pets'

  it('renders with minimum props', () => {
    const tree = renderer.create(
      <NavigationTag title='pets' onClick={jest.fn()} hash={hash} />
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
      <NavigationTag title='pets' onClick={jest.fn()} hash={hash} methods={methods} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders with methods having paths', () => {
    const methods = [{
      type: 'get',
      title: 'Get pets',
      path: '/pets',
      link: '/pets/get'
    },
    {
      type: 'get',
      title: 'Get pets',
      path: '/pets/:id',
      link: '/pets/:id/get'
    }]

    const tree = renderer.create(
      <NavigationTag title='pets' onClick={jest.fn()} hash={hash} methods={methods} navigationMethodDisplayType={'path'} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders with methods having paths and summary', () => {
    const methods = [{
      type: 'get',
      title: 'Get pets',
      path: '/pets',
      link: '/pets/get'
    },
    {
      type: 'get',
      title: 'Get pets',
      path: '/pets/:id',
      link: '/pets/:id/get'
    }]

    const tree = renderer.create(
      <NavigationTag title='pets' onClick={jest.fn()} hash={hash} methods={methods} navigationMethodDisplayType={'all'} />
    )

    expect(tree).toMatchSnapshot()
  })

  it('renders with description', () => {
    const tree = renderer.create(
      <NavigationTag title='Pets' handle='pets' description='Access to Pets' onClick={jest.fn()} hash={hash} />
    )

    expect(tree).toMatchSnapshot()
  })
})
