import React, { useEffect, useRef } from 'react'
//import radio_tuerca from '../img/radio33.png'
import radio_tuerca from '../img/radio33.webp'
//import tuerca from '../img/rueda11.png'
import tuerca from '../img/rueda11.webp'
//import ruedas from '../img/ruedas22.png'
import ruedas from '../img/ruedas22.webp'
import puntos_celestes from '../img/puntos-celestes-1.png'
import Carousel from 'react-bootstrap/Carousel'

// Estilos
import '../css/ServicioTecnico3.css'


const ServicioTecnico3 = () => {

    const sectionRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Añadir la clase a los elementos hijos cuando la sección está en el viewport
            const elementsToAnimateRight = sectionRef.current.querySelectorAll('.linea-servicio-tec');
            elementsToAnimateRight.forEach(element => {
              element.classList.add('animate__fadeInRight');
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
    <div className="servicio-tecnico3 poppins-medium" id="servicio-tecnico3" ref={sectionRef}>
        <div className='servicio-tecnico3-contenedor'>
            <div className='servicio-tecnico3-text'>
                <div className="servicio-tecnico3-header">
                    <div><h1>SERVICIO TÉCNICO</h1></div>
                    {/* 
                    <div className="puntos"><img src={puntos_transparentes}/></div>
                    */}
                </div>
                <div className='servicio-tecnico3-content'>
                    <div className="carousel">
                    <Carousel fade data-bs-theme="dark" interval={1500}>
                        <Carousel.Item>
                            <div className="tarjeta">
                                <img className="img-fluid" src={radio_tuerca} alt="Imagen radio y tuerca"/>
                                <h3>Cambio de piezas</h3>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="tarjeta">
                                <img className="img-fluid" src={tuerca} alt="Imagen tuerca y llave"/>
                                <h3>Reparaciones</h3>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="tarjeta">
                                <img className="img-fluid" src={ruedas} alt="Imagen tuercas de configuración"/>
                                <h3>Configuraciones</h3>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                    </div>
                    <div className="parrafo3">
                        <p> Al enviar tu equipo a mantención, mejoras su <span>rendimiento</span>, alargas su <span>vida útil</span> y mejoras la <span>presentación</span> de tus equipos.</p>
                        <div className="linea-servicio-tec">
                            <img src={puntos_celestes} width="22%" alt="Puntos celestes decoración"/>
                            <img src={puntos_celestes} width="22%" alt="Puntos celestes decoración"/>
                            <img src={puntos_celestes} width="22%" alt="Puntos celestes decoración"/>
                            <img src={puntos_celestes} width="22%" alt="Puntos celestes decoración"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicioTecnico3
