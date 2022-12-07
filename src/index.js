import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalState from './component/Context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalState>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </GlobalState>
);

