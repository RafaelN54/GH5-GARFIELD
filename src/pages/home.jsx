import React from 'react';
import DisplaySearch from "../components/DisplaySearch"
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="App">
      <Carousel />
      <DisplaySearch />
      <Footer />
    </div>
  );
}

export default Home;