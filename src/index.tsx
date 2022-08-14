import React from 'react';
import ReactDOM from 'react-dom/client';
import './global-css-reset.css';
import ShoelaceApp from './components/ShoelaceApp/ShoelaceApp';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ShoelaceApp />
    </React.StrictMode>
  </BrowserRouter>
);
