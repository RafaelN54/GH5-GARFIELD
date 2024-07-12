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
          <h3>First slide</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-img"
          src="/asset/pic-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-img"
          src="/asset/pic-3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
