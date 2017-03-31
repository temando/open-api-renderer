import React, { Component } from 'react';

import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        
      </div>
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string,
  version: React.PropTypes.version
};
