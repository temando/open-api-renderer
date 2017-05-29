import React from 'react';
import ObjectProperty from './../../src/components/ObjectProperty/ObjectProperty';
import renderer from 'react-test-renderer';

describe('<ObjectProperty />', () => {
  it('renders nothing if there are no constraints', () => {
    const tree = renderer.create(
      <ObjectProperty />
    ).toJSON();

    expect(tree).toBeNull();
  });

  it('renders minProperties', () => {
    const tree = renderer.create(
      <ObjectProperty constraints={{minProperties: 2}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders maxProperties', () => {
    const tree = renderer.create(
      <ObjectProperty constraints={{maxProperties: 10}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders minProperties and maxProperties', () => {
    const tree = renderer.create(
      <ObjectProperty constraints={{minProperties: 4, maxProperties: 10}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders minProperties and maxProperties when they are the same value', () => {
    const tree = renderer.create(
      <ObjectProperty constraints={{minProperties: 4, maxProperties: 4}} />
    );

    expect(tree).toMatchSnapshot();
  });
});
