
import React from 'react';
import {render} from 'react-dom';
import Root from './pages/Root';
import { Provider } from 'react-redux';
import store from './dev-store';

render(
  <Provider store={store}>
      <Root />
  </Provider>,document.getElementById('main'));
