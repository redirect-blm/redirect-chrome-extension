import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';

import Root from './components/Root';

const proxyStore = new Store();

// create an element that we can mount our react app into
const anchor = document.createElement('div');
anchor.setAttribute('id', 'redirect-content-anchor')

// mount the app somewhere on amazon.com
document.body.insertBefore(anchor, document.body.childNodes[0]);

proxyStore.ready().then(() => {
  render(
    <Provider store={proxyStore}>
      <Root/>
    </Provider>
   , document.getElementById('rcr-anchor'));
});
