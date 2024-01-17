import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App2.jsx';

import { Provider } from 'react-redux';
import {store} from './store.js';

import './index.css';

//wrap the entire application in the provider for google o auth
import {GoogleOAuthProvider} from '@react-oauth/google'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='910060206576-6crc43oa9a8on0bi7j58mv1ujdlqeida.apps.googleusercontent.com'>
    <Provider store={store}>
    <App />
    </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)


