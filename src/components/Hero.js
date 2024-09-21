import React, { useState } from 'react'
import movistar_logo from '../img/movistar-arena-borde-blanco2.webp'
import lollapalooza_logo from '../img/Lollapalooza.webp'
import viña_logo from '../img/Viña.webp'
import primavera_logo from '../img/primavera-sound-gris.webp'

// Estilos
import '../css/Hero.css'

const Hero = () => {

    const [isLogoVisible, setIsLogoVisible] = useState(false);

    const handleMouseEnter = () => {
      setIsLogoVisible(true);
    };
  
    const handleMouseLeave = () => {
      setIsLogoVisible(true);
    };

    return (
        <div className='hero' id="#hero" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div class="hero-content">
                <h1>Bymas | Radios Motorola</h1>
                <p className='poppins-medium'>Venta y arriendo de equipos de radio comunicación al mejor precio</p>
            </div>
            <div className={`marcas-logos ${isLogoVisible ? 'visible' : ''}`}>
                <img className="movistar-arena" src={movistar_logo} alt="Logo Movistar arena"/>
                <img className="viña" src={viña_logo} alt="Logo Viña del mar"/>
                <img className="lollapalooza" src={lollapalooza_logo} alt="Logo Lollapalooza"/>
                <img className="primavera-sound" src={primavera_logo} alt="Logo Primavera sound"/>
            </div>
            <div className='franja-diagonal'></div>
        </div>
    )
}

export default Hero
