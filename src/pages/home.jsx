import React from 'react';
import DisplaySearch from "../components/DisplaySearch";
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';

function Home({ wishlist, addToWishlist, removeFromWishlist }) {
  return (
    <div className="App mt-32">
      <Carousel />
      <DisplaySearch wishlist={wishlist} addToWishlist={addToWishlist} removeFromWishlist={removeFromWishlist} />
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default Home;
