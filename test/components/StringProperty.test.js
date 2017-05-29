import React from 'react';
import StringProperty from './../../src/components/StringProperty/StringProperty';
import renderer from 'react-test-renderer';

describe('<StringProperty />', () => {
  it('renders nothing if there are no applicable constraints', () => {
    let tree = renderer.create(
      <StringProperty />
    ).toJSON();

    expect(tree).toBeNull();

    tree = renderer.create(
      <StringProperty constraints={{minItems: 1}}/>
    ).toJSON();

    expect(tree).toBeNull();
  });

  it('renders pattern', () => {
    const tree = renderer.create(
      <StringProperty constraints={{pattern: '^[a-zA-Z0-9_-]+$'}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders minLength', () => {
    const tree = renderer.create(
      <StringProperty constraints={{minLength: 2}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders maxLength', () => {
    const tree = renderer.create(
      <StringProperty constraints={{maxLength: 10}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders minLength and maxLength', () => {
    const tree = renderer.create(
      <StringProperty constraints={{minLength: 4, maxLength: 10}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders minLength and maxLength when they are the same value', () => {
    const tree = renderer.create(
      <StringProperty constraints={{minLength: 4, maxLength: 4}} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders pattern, minLength and maxLength', () => {
    const tree = renderer.create(
      <StringProperty constraints={{pattern: '^[a-z]', minLength: 4, maxLength: 10}} />
    );

    expect(tree).toMatchSnapshot();
  });
});
