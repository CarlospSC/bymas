import React, { useState } from 'react';
import movistar_logo from '../img/Movistar arena.webp'
import lollapalooza_logo from '../img/Lollapalooza.webp'
import viña_logo from '../img/Viña.webp'
import belive_logo from '../img/Be live.webp'
import banqueteria_logo from '../img/Banquetería.webp'
import primavera_logo from '../img/primavera-sound-logo.webp'
import seguridad_logo from '../img/Seguridad.webp'
import puntitos_horizontal from '../img/puntitos-celeste.png'
import puntitos_vertical from '../img/puntitos-celeste-vertical-derecha.png'


const Clientes = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [isLlegando, setIsLlegando] = useState(false);
  const [isYendo, setIsYendo] = useState(false);

  const handleMouseEnter = () => {
      setIsHovered(true);
      setIsLlegando(true);
      setTimeout(()=> {
        setTimeout(() => {
          setIsLlegando(false);
          setIsYendo(true);
        }, 1000);
        setIsYendo(false);
      }, 1000);
  };

  const handleMouseLeave = () => {

    setIsHovered(true);
  };

  return (
    <div className='clientes-completo' onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave} id="clientes">
      <div className='linea-inicio-clientes'></div>
        <div className={`linea-puntitos-horizontal h1 adio ${isLlegando ? 'animate__fadeInLeftBig' : 'desaparece'} ${isYendo ? 'animate__fadeOutRightBig' : ''}` }>
          <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
          <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
          <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
          <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
          <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
          <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
          <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
          <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
          <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
          <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
          <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
          <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
          <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
          <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
          <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
        </div>
      <div className='clients'>  
        <div className='linea-puntitos-vertical'>
          <img src={puntitos_vertical} alt="Puntos verticales decoración" width="80%"/>
          <img src={puntitos_vertical} alt="Puntos verticales decoración" width="80%"/>
          <img src={puntitos_vertical} alt="Puntos verticales decoración" width="80%"/>
          <img src={puntitos_vertical} alt="Puntos verticales decoración" width="80%"/>
          <img src={puntitos_vertical} alt="Puntos verticales decoración" width="80%"/>
        </div>
        <div className='clients-contenedor'>
          <div className='clients-line header-line'>
            <h1>CLIENTES Y EVENTOS QUE HEMOS COMUNICADO</h1>
          </div>
          <div className={`clients-line first-line ${isHovered ? 'animate__fadeInRight' : 'not__Hovered'}`}>
            <img src={movistar_logo} width="23%" alt="Logo Movistar arena"/>
            <img src={banqueteria_logo} width="21%" alt="Logo Banquetería JJPG"/>
            <img src={primavera_logo} width="21%" alt="Logo Primavera sound"/>
            <img src={belive_logo} width="16%" alt="Logo Belive"/>
          </div>
          <div className={`clients-line second-line ${isHovered ? 'animate__fadeInLeft' : 'not__Hovered'}`}>
            <img src={seguridad_logo} width="16%" alt="Logo Valgo seguridad"/>
            <img src={viña_logo} width="28%" alt="Logo Viña del mar"/>
            <img src={lollapalooza_logo} width="32%" alt="Logo Lollapalooza"/>
          </div>
        </div>
        <div className='linea-puntitos-vertical'>
          <img src={puntitos_vertical} alt="Puntos verticales decoración" width="80%"/>
          <img src={puntitos_vertical} alt="Puntos verticales decoración" width="80%"/>
          <img src={puntitos_vertical} alt="Puntos verticales decoración" width="80%"/>
          <img src={puntitos_vertical} alt="Puntos verticales decoración" width="80%"/>
          <img src={puntitos_vertical} alt="Puntos verticales decoración" width="80%"/>
        </div>
        
      </div>
      <div className='linea-puntitos-horizontal h2 adio'>
        <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
        <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
        <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
        <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
        <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
        <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
        <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
        <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
        <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
        <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
        <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
        <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
        <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
        <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
        <img src={puntitos_horizontal} alt="Puntos horizontales decoración" width="6%"/>
      </div>
    </div>
    
  )
}

export default Clientes
