import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import BodyContent from '../BodyContent/BodyContent';
import Description from '../Description/Description';
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

    const success = this.isSuccessCode(code);

    return (
      <div className="response">
        <div className={classNames('response-info', {
          success: success,
          error: !success
        })} onClick={this.onClick.bind(this)}>
          <Indicator className="property-indicator" status={status}/>
          <span className="response-code">{code}</span>
          {description && <Description isInline description={description} />}
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

  isSuccessCode(code) {
    return parseInt(code, 10) >= 100 && parseInt(code, 10) <= 399;
  }
}

Response.propTypes = {
  response: PropTypes.object
};
