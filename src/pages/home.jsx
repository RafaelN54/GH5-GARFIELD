import React from 'react';
import DisplaySearch from "../components/DisplaySearch"
import Carousel from '../components/Carousel';

function Home() {
  return (
    <div className="App">
      <Carousel />
      <DisplaySearch />
    </div>
  );
}

export default Home;