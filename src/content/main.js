import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';

import Root from './components/Root';

const proxyStore = new Store();

// create an element that we can mount our react app into
const anchor = document.createElement('div');
anchor.id = 'redirect-content-anchor'

// mount the app somewhere on amazon.com
document.body.append(anchor);

proxyStore.ready().then(() => {
  render(
    <Provider store={proxyStore}>
      <Root/>
    </Provider>
   , document.getElementById('redirect-content-anchor'));
});
