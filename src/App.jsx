import Garden from "./Garden";
import Manifesto from "./Manifesto";
import "./app.scss";

import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route, Link, HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Garden />} />
        <Route path="garden" element={<Garden />} />
        <Route path="manifesto" element={<Manifesto />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
