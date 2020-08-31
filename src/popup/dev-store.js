import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import reducers from './dev-reducers/index';

const middleware = [
  thunkMiddleware.withExtraArgument({ axios }),
  createLogger({ collapsed: true })
];

export default createStore(
    // static reducers for use in development
    // () => ({ domContent: { category: 'Clothing, Shoes & Jewelery', mode: 'development', port: 3001 }}),
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
