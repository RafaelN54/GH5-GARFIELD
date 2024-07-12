import React from 'react';
import Header from './components/Header';
import DisplaySearch from './components/DisplaySearch';
import Carousel from './components/Carousel';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <DisplaySearch />
    </div>
  );
}

export default App;
