import React, { Component } from 'react';
import classNames from 'classnames';
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
              <a
                className="nav-level1"
                key={item.title}
                href={`#${item.title}`}
              >
                {item.title}
              </a>
              <div>
                {item.methods.map((subitem) => {
                  const isActive = (`#${subitem.link}` === this.props.location.hash);
                  return (
                    <a
                      className={classNames('nav-level2', {
                        active: isActive
                      })}
                      key={subitem.link}
                      href={`#${subitem.link}`}
                    >
                      {subitem.type.toUpperCase()} - {subitem.title}
                    </a>
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
