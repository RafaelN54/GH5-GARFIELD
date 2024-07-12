import React from 'react';
import DisplaySearch from "../components/DisplaySearch";
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';

function Home() {
  return (
    <div className="App">
      <Carousel />
      <DisplaySearch />
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default Home;
