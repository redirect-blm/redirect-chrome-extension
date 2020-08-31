import React from 'react';
import {render} from 'react-dom';
import DevRoot from './dev-components/pages/DevRoot';
import { Provider } from 'react-redux';
import store from './dev-store';

render(
  <Provider store={store}>
      <DevRoot />
  </Provider>,document.getElementById('main'));
