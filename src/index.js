import React from 'react';
import { render } from 'react-dom';
import '@babel/polyfill';
import ErrorBoundary from './ErrorBoundary';
import App from './App';
import './index.css';

render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
);
