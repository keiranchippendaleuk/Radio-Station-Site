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
import NewProgram from "./admin/NewProgram.js"
import NewAudio from "./admin/NewAudio.js"
import NewGenre from "./admin/NewGenre.js"
import NewCategory from "./admin/NewCategory.js"
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
        <Route path='/admin/programs/new' element={<NewProgram />} />
        <Route path='/admin/audios/new' element={<NewAudio />} />
        <Route path='/admin/genres/new' element={<NewGenre />} />
        <Route path='/admin/categories/new' element={<NewCategory />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
