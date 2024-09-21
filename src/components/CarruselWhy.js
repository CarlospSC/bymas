import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

//import joven_radio from '../img/rsz_young-handsome-man-talking-walkie-talkie-radio-enjoying-canyon-view.jpg';
//import trato from '../img/rsz_engineers-wearing-safe-uniform-with-radio-communic-2023-11-27-05-12-24-utc.jpg';
import joven_radio from '../img/rsz_young-handsome-man-talking-walkie-talkie-radio-enjoying-canyon-view.webp';
import trato from '../img/rsz_engineers-wearing-safe-uniform-with-radio-communic-2023-11-27-05-12-24-utc.webp';


// Estilos
import '../css/CarruselWhy.css';

const CarruselWhy = () => {
  const [index, setIndex] = useState(0);

  const images = [
    joven_radio,
    trato,    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5500); // Cambio de imagen cada 3 segundos (3000 milisegundos)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Carousel fade controls={false} indicators={false} interval={null} activeIndex={index} className="custom-carousel">
      {images.map((image, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100 custom-image"
            src={image}
            alt={`Slide ${idx}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarruselWhy;
