import React, { Component } from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

import './Navigation.scss';

export default class Navigation extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <div className="nav">
        {navigation && navigation.map((item) => {
          return (
            <div key={item.title}>
              <Link
                className="nav-level1"
                to={item.title}
                spy
                smooth
                duration={300}
              >
                {item.title}
              </Link>
              <div>
                {item.methods.map((subitem) => {
                  return (
                    <Link
                      className="nav-level2"
                      key={subitem.link}
                      to={subitem.link}
                      spy
                      smooth
                      duration={300}
                      offset={-30}
                    >
                      {subitem.type.toUpperCase()} - {subitem.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

Navigation.propTypes = {
  navigation: PropTypes.array
};
