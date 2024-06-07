import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

import './navbar/index.css';
import App from './navbar/App'
import reportWebVitals from './reportWebVitals';

// import '././cocktails/index.css';
// import App from '././cocktails/App';
// import reportWebVitals from './reportWebVitals';
// import { AppProvider } from '././cocktails/context'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ReactDOM.render(
//     <React.StrictMode>
//       <AppProvider>
//       <App />
//       </AppProvider>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );

createRoot(document.getElementById('root'))
.render(
    <App />
);

// createRoot(document.getElementById('root'))
// .render(
//     <AppProvider>
//     <App />
//     </AppProvider>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
