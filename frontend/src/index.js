import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App.js';
import Admin from './admin/Admin.js';
import APrograms from "./admin/Programs.js"
import AAudios from "./admin/Audios.js"
import AGenres from "./admin/Genres.js"
import ACategories from "./admin/Categories.js"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes basename={'/'}>
        <Route path='/' element={<App />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/programs' element={<APrograms />} />
        <Route path='/admin/audios' element={<AAudios />} />
        <Route path='/admin/categories' element={<ACategories />} />
        <Route path='/admin/genres' element={<AGenres />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
