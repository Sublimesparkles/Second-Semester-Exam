import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import ErrorBoundary from './error/ErrorBoundary';
import FallbackError from './error/ErrorFallback';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary
    fallback ={<FallbackError/>}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ErrorBoundary>
);


