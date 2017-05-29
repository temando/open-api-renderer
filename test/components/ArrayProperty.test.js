import React from 'react';
import ArrayProperty from './../../src/components/ArrayProperty/ArrayProperty';
import renderer from 'react-test-renderer';

describe('<ArrayProperty />', () => {
  it('renders nothing if there are no applicable constraints', () => {
    let tree = renderer.create(
      <ArrayProperty />
    ).toJSON();

    expect(tree).toBeNull();

    tree = renderer.create(
      <ArrayProperty constraints={{pattern: '[a-z]+'}}/>
    ).toJSON();

    expect(tree).toBeNull();
  });

  it('renders uniqueItems', () => {
    const tree = renderer.create(
      <ArrayProperty constraints={{uniqueItems: true}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders minItems', () => {
    const tree = renderer.create(
      <ArrayProperty constraints={{minItems: 2}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders maxItems', () => {
    const tree = renderer.create(
      <ArrayProperty constraints={{maxItems: 10}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders minItems and maxItems', () => {
    const tree = renderer.create(
      <ArrayProperty constraints={{minItems: 4, maxItems: 10}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders minItems and maxItems when they are the same value', () => {
    const tree = renderer.create(
      <ArrayProperty constraints={{minItems: 4, maxItems: 4}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders uniqueItems, minItems and maxItems', () => {
    const tree = renderer.create(
      <ArrayProperty constraints={{uniqueItems: true, minItems: 4, maxItems: 10}} />
    );

    expect(tree).toMatchSnapshot();
  });
});
