import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass'
import * as serviceWorker from './serviceWorker';

import App from './container/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './redux/index'

const store = createStore(rootReducer, applyMiddleware(reduxThunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
