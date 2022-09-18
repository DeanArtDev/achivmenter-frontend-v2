import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global-style/index.scss';
import App from './ui/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
