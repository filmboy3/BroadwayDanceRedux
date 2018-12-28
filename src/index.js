import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { CookiesProvider } from 'react-cookie';
import "./main.css";
import App from "./js/components/App.jsx";
import registerServiceWorker from './registerServiceWorker';
import reducers from './js/reducers';
import handleNewMessage from './js/sagas';
import setupSocket from './js/sockets';
import username from './js/utils/name';
// import username from './js/components/App.jsx';
console.log("Here is username: ", username);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, { socket, username })

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
    <App />
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();

export default store;