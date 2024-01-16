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
    <GoogleOAuthProvider clientId={`${import.meta.local.env.GOOGLE_API_TOKEN}`}>
    <Provider store={store}>
    <App />
    </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)


