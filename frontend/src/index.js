import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from 'store';

import App from './App';

import GlobalStyles from 'shared/styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
