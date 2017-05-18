import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import BodyContent from '../BodyContent/BodyContent';
import Indicator from '../Indicator/Indicator';

import './Response.scss';

export default class Response extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    const { response } = this.props;
    const { code, description, schema, example, examples } = response;
    const { isOpen } = this.state;
    let status;
    if (isOpen) {
      status = 'open';
    }

    return (
      <div className="response">
        <div className="response-info" onClick={this.onClick.bind(this)}>
          <Indicator className="property-indicator" status={status} />
          <span className="response-code">{code}</span>
          <span>{description}</span>
        </div>
        {isOpen &&
          <ReactCSSTransitionGroup
            transitionName="response-slide-toggle"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
          >
            <BodyContent schema={schema} example={example} examples={examples}/>
          </ReactCSSTransitionGroup>
        }
      </div>
    );
  }

  onClick() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  }
}

Response.propTypes = {
  response: PropTypes.object
};
