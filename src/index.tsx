import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass'
import 'react-toastify/dist/ReactToastify.css';

import * as serviceWorker from './serviceWorker';


import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './redux/index'


import App from './container/App';

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
