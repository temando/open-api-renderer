import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
//import createHistory from 'history/createBrowserHistory';
import { routerReducer } from 'react-router-redux';

//export const history = createHistory();

export default function configureStore(initialState = window.STATE_FROM_SERVER) {
  const reducer = combineReducers({
    routing: routerReducer
  });

  const additionalStoreEnhancers = [
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  ];

  const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunkMiddleware), ...additionalStoreEnhancers)
  );

  return store;
}
