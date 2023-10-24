import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from './context';
import Router from './router';

import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
