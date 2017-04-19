import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';

import Page from '../components/Page/Page';

import getDefinition from '../store/definition/actions';

import '../general.scss';

class BaseHandler extends Component {

  componentWillMount() {
    // TODO: refactor this to be more flexible, i.e. coming from multiple places
    // const openApiUrl = this.props.location.query.url;
    // const openApiUrl = 'https://s3.amazonaws.com/temando-swagger-registry-dmidwaffle-storage/swagger/temando-public-api.json';
    const openApiUrl = 'http://localhost:8000/temando/resources/temando-public-api.json';
    this.props.getDefinition(openApiUrl);
  }

  render() {
    const { definition } = this.props;

    return (
      <DocumentTitle title="Open API v3 renderer">
        <div className="main">
          {!definition && "Welcome to Temando's new Open API Renderer. Watch this space!"}
          {definition && <Page definition={definition}/>}
        </div>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  definition: state.definition
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getDefinition
}, dispatch);

BaseHandler.contextTypes = {
  router: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseHandler);
