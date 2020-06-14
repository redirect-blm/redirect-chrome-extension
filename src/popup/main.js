
import React from 'react';
import {render} from 'react-dom';
import Root from './pages/Root';
import { Store } from 'webext-redux';
import { Provider } from 'react-redux';

const proxyStore = new Store();

proxyStore.ready().then(() => {
  render(
     <Provider store={proxyStore}>
       <Root />
     </Provider>
    ,document.getElementById('main'));
});
