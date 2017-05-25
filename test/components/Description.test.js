import React from 'react';
import Description from './../../src/components/Description/Description';
import { expect } from 'chai';
import { render } from 'enzyme';

describe('<Description />', () => {
  it('renders text with no commonmark as html', () => {
    const text = 'This method has zero markdown.';
    const wrapper = render(<Description description={text} />);

    expect(wrapper.find('p').length).to.equal(1);
  });

  it('renders commonmark text as html', () => {
    const text = 'This method has some `var i = 0` _markdown_, including a [link](http://www.google.com).';
    const wrapper = render(<Description description={text} />);

    expect(wrapper.find('p').length).to.equal(1);
    expect(wrapper.find('code').length).to.equal(1);
    expect(wrapper.find('em').length).to.equal(1);
    expect(wrapper.find('a').length).to.equal(1);
  });

  it('renders text inline if asked', () => {
    const text = 'This method has zero markdown';
    const wrapper = render(<Description isInline description={text} />);

    expect(wrapper.find('.description-inline').length).to.equal(1);
  });
});
