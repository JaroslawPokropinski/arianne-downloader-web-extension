import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../components/App';
import 'styles/popup.css';
import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

if (typeof global.browser === 'undefined' && process.env.VENDOR === 'chrome') {
  global.browser = chrome as any;
}

const domContainer = document.querySelector('#root')!;

const root = createRoot(domContainer);
root.render(<App />);
