import React, { Component } from 'react';
import { Link } from 'react-scroll';

import './Navigation.scss';

export default class Navigation extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <div className="nav">
        {navigation && navigation.map((item) => {
          return (
            <div key={item.get('title')}>
              <Link
                className="nav-level1"
                to={item.get('title')}
                spy
                smooth
                duration={300}
              >
                {item.get('title')}
              </Link>
              <div>
                {item.get('methods').map((subitem) => {
                  return (
                    <Link
                      className="nav-level2"
                      key={subitem.get('link')}
                      to={subitem.get('link')}
                      spy
                      smooth
                      duration={300}
                      offset={-30}
                      //containerId={item.get('title')}
                    >
                      {subitem.get('title')}
                    </Link>
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
