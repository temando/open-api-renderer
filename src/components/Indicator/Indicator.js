import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Indicator.scss';

const arrow = require('./arrow.png');

export default class Indicator extends Component {
  render () {
    const { status, className } = this.props;

    return (
      <div className={classNames('indicator', className, {
        [`indicator--${status}`]: status
      })}>
        <img src={arrow} title="arrow" />
      </div>
    );
  }
}

Indicator.propTypes = {
  status: PropTypes.string,
  className: PropTypes.string
};
