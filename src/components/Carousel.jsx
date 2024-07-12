import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselComponent.css'; // Import the custom CSS file

function CarouselComponent() {
  return (
    <Carousel className="custom-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-img"
          src="/asset/pic-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Personalization</h3>
          <p>From our hands to your home – bring the beauty of artisanal crafts into your life.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-img"
          src="/asset/pic-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Authenticity</h3>
          <p>Discover the charm of handmade art – each piece tells a unique story.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-img"
          src="/asset/pic-3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Artisanal Beauty</h3>
          <p>Handcrafted with love and skill, perfect for adding a personal touch to your space.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
