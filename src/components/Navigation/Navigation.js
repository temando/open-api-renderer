import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Navigation.scss';

export default class Navigation extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <div className="nav">
        {navigation && navigation.map((tag) => {
          return (
            <div key={tag.title}>
              <a
                className="nav-level1"
                key={tag.title}
                href={`#${tag.title}`}
              >
                {tag.title}
              </a>
              <div>
                {tag.methods.map((method) => {
                  const isActive = (`#${method.link}` === this.props.location.hash);
                  return (
                    <a
                      className={classNames('nav-level2', {
                        active: isActive
                      })}
                      key={method.link}
                      href={`#${method.link}`}
                    >
                      <span className="method-type">{method.type.toUpperCase()}</span>
                      <span className="method-title">{method.title}</span>
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
