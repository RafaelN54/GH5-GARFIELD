import React, { useState } from 'react';
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  }

  return (
    <Router>
      <ConditionalHeader isAuthenticated={isAuthenticated} onSignOut={handleSignOut}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/signin" element={<Signin onSignIn={handleSignIn} />}/>
      </Routes>
    </Router>
    
  );
}

function ConditionalHeader({ isAuthenticated, onSignOut }) {
  const location = useLocation();
  const showHeader = location.pathname !== "/signin";
  
  return showHeader ? <Header isAuthenticated={isAuthenticated} onSignOut={onSignOut} /> : null;
}

export default App;
