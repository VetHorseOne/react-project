import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Cadastro from "..components/Cadastro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
