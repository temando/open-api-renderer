import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

export default class Header extends Component {
  render() {
    const { definitionTitle, version } = this.props;
    return (
      <div className="header">
        <h1>{definitionTitle}</h1>
        <span className="header-version">{version}</span>
      </div>
    );
  }
}

Header.propTypes = {
  definitionTitle: PropTypes.string,
  version: PropTypes.string
};
