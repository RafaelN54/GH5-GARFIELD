import React, { useState } from 'react';
import Header from './components/Header';
import DisplaySearch from './components/DisplaySearch';
import Carousel from './components/Carousel';
import "./App.css";
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./pages/home";
import Signin from "./pages/signin";
import Cart from "./pages/Cart";
import Favorite from './pages/Favorite';
import Fab from "@mui/material/Fab"; 
import { Facebook } from "@mui/icons-material"; 
import styled, { ThemeProvider } from 'styled-components';
import {
  normal,
  achromatomaly,
  achromatopsia,
  deuteranomaly,
  deuteranopia,
  protanomaly,
  protanopia,
  tritanomaly,
  tritanopia,
} from './themes';

const themes = {
  normal: normal,
  achromatomaly: achromatomaly,
  achromatopsia: achromatopsia,
  deuteranomaly: deuteranomaly,
  deuteranopia: deuteranopia,
  protanomaly: protanomaly,
  protanopia: protanopia,
  tritanomaly: tritanomaly,
  tritanopia: tritanopia,
};
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [theme, setTheme] = useState('normal');

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  const handleTheme = () => {
    setTheme(event.target.value);
  };

  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };

  const removeFromWishlist = (item) => {
    setWishlist((prevWishlist) => prevWishlist.filter((wishlistItem) => wishlistItem.id !== item.Id));
  };

  return (
    <Router>
      <ConditionalHeader isAuthenticated={isAuthenticated} onSignOut={handleSignOut}/>
      <Routes>
        <Route path="/" element={<Home wishlist={wishlist} addToWishlist={addToWishlist} removeFromWishlist={removeFromWishlist} />} />
        <Route path="/cart" element={<Cart isAuthenticated={isAuthenticated} />} />
        <Route path="/signin" element={<Signin onSignIn={handleSignIn} />} />
        <Route path="/favorite" element={<Favorite wishlist={wishlist} addToWishlist={addToWishlist} removeFromWishlist={removeFromWishlist}/>} />
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
