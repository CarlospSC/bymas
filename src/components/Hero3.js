import React, { useEffect, useRef } from 'react';
import movistar_logo from '../img/movistar-arena-borde-blanco2.webp';
import lollapalooza_logo from '../img/Lollapalooza.webp';
import viña_logo from '../img/Viña.webp';
import primavera_logo from '../img/primavera-sound-gris.webp';
import 'bootstrap/dist/css/bootstrap.min.css';

// Estilos
import '../css/Hero3.css';

const Hero3 = () => {

    const sectionRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Añadir la clase a los elementos hijos cuando la sección está en el viewport
            const elementsToAnimateRight = sectionRef.current.querySelectorAll('.marcas-logos3');
            elementsToAnimateRight.forEach(element => {
              element.classList.add('animate__fadeInLeftBig');
            });
          } else {
            // Eliminar la clase cuando la sección sale del viewport (opcional)
          }
        },
        {
          threshold: 0.8, // Ajusta esto según sea necesario
        }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);

    return (
        <div className='hero3 position-relative' id="hero3" ref={sectionRef}>
            <div className="hero3-content text-left position-absolute">
                <h1>Bymas | Radios Motorola</h1>
                <p className='poppins-medium'>Venta y arriendo de equipos de radio comunicación al mejor precio</p>
            </div>
            <div className="marcas-logos3 d-flex align-items-center">
                <img className="movistar-arena" src={movistar_logo} alt="Logo Movistar arena"/>
                <img className="viña" src={viña_logo} alt="Logo Viña del mar"/>
                <img className="lollapalooza" src={lollapalooza_logo} alt="Logo Lollapalooza"/>
                <img className="primavera-sound" src={primavera_logo} alt="Logo Primavera sound"/>
            </div>
            <div className='franja-diagonal'></div>
        </div>
    );
};

export default Hero3;
