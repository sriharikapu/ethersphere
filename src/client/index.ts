require('isomorphic-fetch');
require('regenerator-runtime/runtime');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Reducer, Store, createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware, RouterState } from 'react-router-redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from 'client/app/components/App';;
import settings from 'settings';
import Web3 from 'web3';
import bindReduxResizeListener from './app/lib/reduxResizeListener';
import { RootAction } from './actions';

// reducers
import appReducer from 'client/app/reducers'

// Create browser history
export const history = createHistory();

// Support redux devtools extension
const reduxDevtoolsExt = (<any>window).__REDUX_DEVTOOLS_EXTENSION__;
const isReduxDevtoolsDefined = typeof reduxDevtoolsExt !== 'undefined';
const reduxDevtools = isReduxDevtoolsDefined ? reduxDevtoolsExt() : f => f;

interface StoreEnhancerState {}

export interface RootState extends StoreEnhancerState {
  app: any;
  router: RouterState;
}

// Root redux reducer
const reducer = combineReducers<RootState>({
  app: appReducer,
  router: routerReducer,
});
const initialState = (window as any).__PRELOADED_STATE__ || {};
const middlewares = applyMiddleware(
  routerMiddleware(history),
  thunk
);
const enhancer = compose(middlewares, reduxDevtools);
export const store = createStore(reducer, initialState, enhancer);

const app = React.createElement(
  Provider,
  { store: store },
  React.createElement(App, null)
);
const rootElement = document.getElementById('app');

ReactDOM.render(app, rootElement, onRendered);

// Anything that is lower priority than getting the app rendered should go here.
function onRendered() {
  bindReduxResizeListener(store);

  (window as any).web3 = new Web3(new Web3.providers.HttpProvider(settings.ETHEREUM_NODE_URL));
}

export {}
