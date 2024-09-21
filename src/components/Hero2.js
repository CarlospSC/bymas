import React, { useState } from 'react';
import movistar_logo from '../img/movistar-arena-borde-blanco2.webp';
import lollapalooza_logo from '../img/Lollapalooza.webp';
import viña_logo from '../img/Viña.webp';
import primavera_logo from '../img/primavera-sound-gris.webp';
import 'bootstrap/dist/css/bootstrap.min.css';

// Estilos
import '../css/Hero2.css';

const Hero2 = () => {
    const [isLogoVisible, setIsLogoVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsLogoVisible(true);
    };

    const handleMouseLeave = () => {
        setIsLogoVisible(false);
    };

    return (
        <div className='hero2 position-relative' id="hero2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="hero2-content text-left position-absolute">
                <h1>Bymas | Radios Motorola</h1>
                <p className='poppins-medium'>Venta y arriendo de equipos de radio comunicación al mejor precio</p>
            </div>
            <div className={`marcas-logos2 d-flex align-items-center ${isLogoVisible ? 'animate__fadeInLeftBig' : ''}`}>
                <img className="movistar-arena" src={movistar_logo} alt="Logo Movistar arena"/>
                <img className="viña" src={viña_logo} alt="Logo Viña del mar"/>
                <img className="lollapalooza" src={lollapalooza_logo} alt="Logo Lollapalooza"/>
                <img className="primavera-sound" src={primavera_logo} alt="Logo Primavera sound"/>
            </div>
            <div className='franja-diagonal'></div>
        </div>
    );
};

export default Hero2;
