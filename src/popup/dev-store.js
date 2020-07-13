import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

const middleware = [
  thunkMiddleware.withExtraArgument({ axios }),
  createLogger({ collapsed: true })
];

export default createStore(
    // static reducers for use in development
  () => ({ domContent: { category: 'books', mode: 'development', port: 3001 }}),
  composeWithDevTools(applyMiddleware(...middleware))
);
