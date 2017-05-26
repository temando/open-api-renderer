import React, { Component } from 'react';
import classNames from 'classnames';
import markdown from 'markdown-it';
import PropTypes from 'prop-types';

const cm = markdown('commonmark');

import './Description.scss';

export default class Description extends Component {
  render() {
    const { isInline, description } = this.props;
    const text = {
      __html: cm.render(description)
    };

    return (
      <div className={classNames('description', {
        'description-inline': isInline
      })} dangerouslySetInnerHTML={text} />
    );
  }
}

Description.PropTypes = {
  description: PropTypes.string.isRequired,
  isInline: PropTypes.bool
};
