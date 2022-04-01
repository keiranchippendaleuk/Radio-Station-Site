import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App.js';
import Admin from './Admin.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes basename={'/'}>
        <Route path='/' element={<App />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
