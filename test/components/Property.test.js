import React from 'react';
import Property from './../../src/components/Property/Property';
import renderer from 'react-test-renderer';
import ReactShallowRenderer from 'react-test-renderer/shallow';

describe('<Property />', () => {
  it('can render a basic property', () => {
    const tree = renderer.create(
      <Property name={'type'} type={['string']} isRequired isLast />
    );

    expect(tree).toMatchSnapshot();
  });

  it('can render a property with enum', () => {
    const tree = renderer.create(
      <Property
        name={'packagingType'}
        type={['string']}
        enumValues={['box', 'carton']}
        isRequired />
    );

    expect(tree).toMatchSnapshot();
  });

  it('can render a property with a subtype', () => {
    const tree = renderer.create(
      <Property
        name={'data'}
        type={['array']}
        subtype={'object'}
        isRequired={false} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('can render a property with description', () => {
    const shallow = new ReactShallowRenderer();
    const tree = shallow.render(
      <Property
        name={'type'}
        type={['string']}
        description={'This is _markdown_ text'}
        isRequired />
    );

    expect(tree).toMatchSnapshot();
  });

  it('can render a property with numerical constraints', () => {
    const shallow = new ReactShallowRenderer();
    const tree = shallow.render(
      <Property
        name={'type'}
        type={['number']}
        constraints={{multipleOf: 2}}
        isRequired />
    );

    expect(tree).toMatchSnapshot();
  });

  it('can render a property with multiple types', () => {
    const tree = renderer.create(
      <Property
        name={'value'}
        type={['string', 'number']}
        isRequired={false} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('can render a property with a format', () => {
    const tree = renderer.create(
      <Property
        name={'value'}
        constraints={{format: 'email'}}
        type={['string']}
        isRequired={false} />
    );

    expect(tree).toMatchSnapshot();
  });
});
