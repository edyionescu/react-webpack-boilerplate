import React from 'react';
import { createRoot } from 'react-dom/client';
import '@babel/polyfill';
import ErrorBoundary from './ErrorBoundary';
import App from './App';
import './index.css';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
