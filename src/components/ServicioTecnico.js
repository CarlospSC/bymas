import React, { useState } from 'react';
import puntos_transparentes from '../img/Puntos_transparentes.png'
//import radio_tuerca from '../img/radio33.png'
import radio_tuerca from '../img/radio33.webp'
//import tuerca from '../img/rueda11.png'
import tuerca from '../img/rueda11.webp'
//import ruedas from '../img/ruedas22.png'
import ruedas from '../img/ruedas22.webp'
import puntos_celestes from '../img/puntos-celestes-1.png'
import Carousel from 'react-bootstrap/Carousel';

const ServicioTecnico = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(true);
    };


  return (
    <div className="servicio-tecnico poppins-medium" onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave} id="servicio-tecnico">
        <div className='servicio-tecnico-contenedor'>
            <div className='servicio-tecnico-text'>
                <div className="servicio-tecnico-header">
                    <div><h1>SERVICIO TÉCNICO</h1></div>
                    <div className="puntos"><img src={puntos_transparentes} alt="Puntos transparentes decoración"/></div>
                </div>
                <div className='servicio-tecnico-content'>
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
                    <div className="parrafo">
                        <p> Al enviar tu equipo a mantención, mejoras su <span>rendimiento</span>, alargas su <span>vida útil</span> y mejoras la <span>presentación</span> de tus equipos.</p>
                        <div className={`linea-servicio-tec ${isHovered ? 'animate__fadeInRight' : 'not__Hovered'}`}>
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

export default ServicioTecnico
