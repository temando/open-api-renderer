import React, { Component } from 'react';
import { connect } from 'react-redux';

import Page from 'components/Page';

class BaseHandler extends Component {
  render() {
    return (
      <div>
        <Page />
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => ({});

BaseHandler.contextTypes = {
  router: React.PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseHandler);