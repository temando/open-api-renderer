import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import 'babel-polyfill';

import routes from './routes';
import configureStore from './store/configure';

// const isBrowser = typeof navigator !== 'undefined' && navigator.indexOf('Node.js') === -1;

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

export default class App extends React.Component {

  render () {
    return (
      <Provider store={store}>
        <Router history={history}>{routes}</Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
