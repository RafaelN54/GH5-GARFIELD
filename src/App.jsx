import React from 'react';
import Header from './components/Header';
import DisplaySearch from './components/DisplaySearch';
import Carousel from './components/Carousel';
import "./App.css";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart"/>
        <Route path="/signin"/>
      </Routes>
    </Router>
  );
}

export default App;