import React from 'react';
import ReactDOM from 'react-dom/client';
import  GlobalStyleComponent  from './global';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyleComponent />
    <App />
  </React.StrictMode>
);

