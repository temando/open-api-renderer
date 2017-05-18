import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Indicator from '../Indicator/Indicator';

import './Navigation.scss';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expandedTags: []
    };
  }

  componentWillMount() {
    this.props.navigation.map((tag) => {
      tag.methods.map((method) => {
        if (`#${method.link}` === this.props.location.hash) {
          this.updateExpandedTags(tag.title);
        }
      });
    });
  }

  render() {
    const { navigation } = this.props;
    const { expandedTags } = this.state;

    return (
      <div className="nav">
        {navigation && navigation.map((tag) => {
          let status;
          if (expandedTags.indexOf(tag.title) === -1) {
            status = 'right';
          }
          return (
            <div key={tag.title}>
              <a
                className="nav-level1"
                key={tag.title}
                href={`#${tag.title}`}
                onClick={this.updateExpandedTags.bind(this, tag.title)}
              >
                {tag.title}
                <Indicator className="property-indicator" status={status}/>
              </a>
              {expandedTags.indexOf(tag.title) !== -1 &&
                <ReactCSSTransitionGroup
                  transitionName="nav-slide-toggle"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}
                  transitionAppear
                  transitionAppearTimeout={500}
                >
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
                </ReactCSSTransitionGroup>
              }
            </div>
          );
        })}
      </div>
    );
  }

  updateExpandedTags(tagTitle) {
    const { expandedTags } = this.state;
    if (expandedTags.indexOf(tagTitle) !== -1) {
      const newExpanded = expandedTags.filter((prop) => prop !== tagTitle);
      this.setState({ expandedTags: newExpanded });
    } else {
      this.setState({ expandedTags: [...expandedTags, tagTitle]});
    }
  }
}

Navigation.propTypes = {
  navigation: PropTypes.array
};
