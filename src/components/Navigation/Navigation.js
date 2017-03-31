import React, { Component } from 'react';

import './Navigation.scss';

export default class Navigation extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <div className="nav">
        {navigation && navigation.map((item) => {
          return (
            <div key={item.get('title')}>
              <div className="nav-level1">{item.get('title')}</div>
              <div>
                {item.get('methods').map((subitem) => {
                  return (
                    <div className="nav-level2" key={subitem.get('link')}>{subitem.get('title')}</div>
                  );
                }).toArray()}
              </div>
            </div>
          );
        }).toArray()}
      </div>
    );
  }
}

Navigation.propTypes = {
  navigation: React.PropTypes.object
};
