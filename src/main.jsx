import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ClerkProvider } from "@clerk/clerk-react";
import { Provider } from 'react-redux';
import Store from './redux/Store.js';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Provider store={Store}>
      <App />
      </Provider>
    </ClerkProvider>
  </React.StrictMode>
);

