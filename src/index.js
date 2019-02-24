import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import storeFactory from './store';

const store = storeFactory()
window.store = store
console.warn(store)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
