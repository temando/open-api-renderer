import React, { Component } from 'react';
import PropTypes from 'prop-types';
import markdown from 'markdown-it';

const cm = markdown('commonmark');

import './Description.scss';

export default class Description extends Component {
  render() {
    const { isInline, description } = this.props;
    const text = {
      __html: cm.render(description)
    };

    return (
      <div className={isInline ? 'description description-inline' : 'description'} dangerouslySetInnerHTML={text} />
    );
  }
}

Description.PropTypes = {
  description: PropTypes.string.isRequired,
  isInline: PropTypes.bool
};
