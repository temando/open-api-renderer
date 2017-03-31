import React, { Component } from 'react';

import './ContentContainer.scss';

export default class ContentContainer extends Component {
  render() {
    return (
      <div className="content-container">
        {this.props.children}
      </div>
    );
  }
}
