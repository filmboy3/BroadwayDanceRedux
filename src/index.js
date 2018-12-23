import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import "./main.css";
import App from "./js/components/App.jsx";
import registerServiceWorker from './registerServiceWorker';
import { addUser } from './js/actions';
import chat from './js/reducers';

const store = createStore(chat);

store.dispatch(addUser('Me'));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
