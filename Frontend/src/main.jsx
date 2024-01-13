import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App2.jsx';

import { Provider } from 'react-redux';
import {store} from './store.js';

//import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)


