import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentTitle from 'react-document-title';

import Page from 'components/Page/Page';

import getDefinition from 'store/definition/actions';

import '../general.scss';

class BaseHandler extends Component {

  componentWillMount() {
    this.props.actions.getDefinition();
  }

  render() {
    const { definition } = this.props;
    return (
      <DocumentTitle title="Open API v3 renderer">
        <div className="main">
          {!definition && "Welcome to Temando's new Open API Renderer. Watch this space!"}
          {definition && <Page definition={definition} />}
        </div>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  definition: state.definition
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getDefinition
  }, dispatch)
});

BaseHandler.contextTypes = {
  router: React.PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseHandler);