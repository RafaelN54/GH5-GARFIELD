import React, { useState } from 'react';
import Header from './components/Header';
import "./App.css";
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./pages/home";
import Signin from "./pages/signin";
import Cart from "./pages/Cart";
import Favorite from './pages/Favorite';

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


  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };

  const removeFromWishlist = (item) => {
    setWishlist((prevWishlist) => prevWishlist.filter((wishlistItem) => wishlistItem.id !== item.id));
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
