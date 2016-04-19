import React from 'react';
import ReactDOM from 'react-dom';
import { Examples } from './index';

//Redux
import {DevTools, store} from './redux-setup.js';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Examples />
      <DevTools />
    </div>
  </Provider>
  , document.getElementById('root')
);
