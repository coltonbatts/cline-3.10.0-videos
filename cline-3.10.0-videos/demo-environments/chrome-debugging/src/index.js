import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Intentional console error for debugging demonstration
console.error('Failed to load configuration file: config.json not found');

// Intentional console warning for debugging demonstration
setTimeout(() => {
  console.warn('Performance warning: Excessive re-renders detected in Dashboard component');
}, 2000);
