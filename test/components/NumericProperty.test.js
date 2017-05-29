import React from 'react';
import NumericProperty from './../../src/components/NumericProperty/NumericProperty';
import renderer from 'react-test-renderer';

describe('<NumericProperty />', () => {
  it('renders nothing if there are no applicable constraints', () => {
    let tree = renderer.create(
      <NumericProperty />
    ).toJSON();

    expect(tree).toBeNull();

    tree = renderer.create(
      <NumericProperty constraints={{minItems: 1}}/>
    ).toJSON();

    expect(tree).toBeNull();
  });

  it('renders multipleOf', () => {
    const tree = renderer.create(
      <NumericProperty constraints={{multipleOf: 2}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders maximum', () => {
    const tree = renderer.create(
      <NumericProperty constraints={{maximum: 2}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders minimum', () => {
    const tree = renderer.create(
      <NumericProperty constraints={{minimum: 2}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders minimum and maximum', () => {
    const tree = renderer.create(
      <NumericProperty constraints={{minimum: 2, maximum: 5}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders exclusiveMaximum', () => {
    const tree = renderer.create(
      <NumericProperty constraints={{exclusiveMaximum: 2}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders exclusiveMinimum', () => {
    const tree = renderer.create(
      <NumericProperty constraints={{exclusiveMinimum: 2}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders exclusiveMinimum and exclusiveMaximum', () => {
    const tree = renderer.create(
      <NumericProperty constraints={{exclusiveMinimum: 2, exclusiveMaximum: 5}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders a combination of constraints', () => {
    const tree = renderer.create(
      <NumericProperty constraints={{multipleOf: 2, minimum: 2, maximum: 20 }} />
    );

    expect(tree).toMatchSnapshot();
  });
});
