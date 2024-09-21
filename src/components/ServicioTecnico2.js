import React, { useState } from 'react'
//import radio_tuerca from '../img/radio33.png'
import radio_tuerca from '../img/radio33.webp'
//import tuerca from '../img/rueda11.png'
import tuerca from '../img/rueda11.webp'
//import ruedas from '../img/ruedas22.png'
import ruedas from '../img/ruedas22.webp'
import puntos_celestes from '../img/puntos-celestes-1.png'
import Carousel from 'react-bootstrap/Carousel'

// Estilos
import '../css/ServicioTecnico2.css'


const ServicioTecnico2 = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(true);
    };


  return (
    <div className="servicio-tecnico2 poppins-medium" onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave} id="servicio-tecnico2">
        <div className='servicio-tecnico2-contenedor'>
            <div className='servicio-tecnico2-text'>
                <div className="servicio-tecnico2-header">
                    <div><h1>SERVICIO TÉCNICO</h1></div>
                    {/* 
                    <div className="puntos"><img src={puntos_transparentes}/></div>
                    */}
                </div>
                <div className='servicio-tecnico2-content'>
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
                    <div className="parrafo2">
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

export default ServicioTecnico2
