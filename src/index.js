import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

import './navbar/index.css';
import App from './navbar/App'
import reportWebVitals from './reportWebVitals';


createRoot(document.getElementById('root'))
.render(
    <App />
);


reportWebVitals();
