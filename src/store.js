import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './redux/index';

const middleware = [
  createLogger({ collapsed: true })
];

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
