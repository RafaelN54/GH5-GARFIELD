import React from 'react';
import Header from './components/Header';
import DisplaySearch from './components/DisplaySearch';
import Carousel from './components/Carousel';
import "./App.css";
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./pages/home";
import Signin from "./pages/signin";
import Cart from "./pages/Cart";
import Fab from "@mui/material/Fab"; 
import { Facebook } from "@mui/icons-material"; 

function App() {
  return (
    <Router>
      <ConditionalHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/signin" element={<Signin/>}/>
      </Routes>
    </Router>
    
  );
}

function ConditionalHeader() {
  const location = useLocation();
  const showHeader = location.pathname !== "/signin";
  
  return showHeader ? <Header /> : null;
}

export default App;
