import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('root element not found');
const root = ReactDOM.createRoot(rootEl);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
