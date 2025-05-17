import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Wheel from './Wheel';
import reportWebVitals from './reportWebVitals';
import Wheel8Ball from './Wheel8Ball';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Wheel />
    {/* <App /> */}
    {/* <Wheel8Ball /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
