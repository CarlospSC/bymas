import React, { useState } from 'react'
import movistar_logo from '../img/Movistar arena.webp'
import lollapalooza_logo from '../img/Lollapalooza.webp'
import viña_logo from '../img/Viña.webp'
import belive_logo from '../img/Be live.webp'
import banqueteria_logo from '../img/Banquetería.webp'
import primavera_logo from '../img/primavera-sound-logo.webp'
import seguridad_logo from '../img/Seguridad.webp'
import puntitos_vertical_derecha from '../img/puntitos-celeste-vertical-derecha.png'
import puntitos_vertical_izquierda from '../img/puntitos-celeste-vertical-izquierda.png'

// Estilos
import '../css/Clientes2.css'



const Clientes2 = () => {
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
      <div className='clientes2-completo' onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} id="clientes2">
        <div className='linea-inicio-clientes3'></div>
        <div className='clients2'>  
          <div className='linea-puntitos-vertical'>
            <img src={puntitos_vertical_izquierda} alt="Puntos verticales decoración" width="80%"/>
            <img src={puntitos_vertical_izquierda} alt="Puntos verticales decoración" width="80%"/>
            <img src={puntitos_vertical_izquierda} alt="Puntos verticales decoración" width="80%"/>
            <img src={puntitos_vertical_izquierda} alt="Puntos verticales decoración" width="80%"/>
            <img src={puntitos_vertical_izquierda} alt="Puntos verticales decoración" width="80%"/>
            <img src={puntitos_vertical_izquierda} alt="Puntos verticales decoración" width="80%"/>
            <img src={puntitos_vertical_izquierda} alt="Puntos verticales decoración" width="80%"/>
          </div>
          <div className='clients2-contenedor'>
            <div className='clients2-line header-line'>
              <h1>CLIENTES Y EVENTOS QUE HEMOS COMUNICADO</h1>
            </div>
            <div className={`clients2-line first-line ${isHovered ? 'animate__fadeInRight' : 'not__Hovered'}`}>
              <img src={movistar_logo} width="38%" alt="Logo Movistar arena"/>
              <img src={lollapalooza_logo} width="43%" alt="Logo Lollapalooza"/>
              
            </div>
            <div className={`clients2-line second-line ${isHovered ? 'animate__fadeInLeft' : 'not__Hovered'}`}>
              <img src={seguridad_logo} width="24%" alt="Logo Valgo seguridad"/>
              <img src={viña_logo} width="31%" alt="Logo Viña del mar"/>
              <img src={banqueteria_logo} width="31%" alt="Logo Banquetería JJPG"/>
            </div>
            <div className={`clients2-line third-line ${isHovered ? 'animate__fadeInRight' : 'not__Hovered'}`}>
              <img src={primavera_logo} width="44%" alt="Logo Primavera sound"/>
              <img src={belive_logo} width="30%" alt="Logo Belive"/>
            </div>
            {/* 
            <div className={`clients3-line fourth-line ${isHovered ? 'animate__fadeInRight' : 'not__Hovered'}`}>
              <img src={movistar_logo} width="23%"/>
              <img src={banqueteria_logo} width="21%"/>
              <img src={primavera_logo} width="21%"/>
              <img src={belive_logo} width="16%"/>
            </div>
            */}
          </div>
          <div className='linea-puntitos-vertical'>
            <img src={puntitos_vertical_derecha} alt="Puntos verticales decoración" width="80%"/>
            <img src={puntitos_vertical_derecha} alt="Puntos verticales decoración" width="80%"/>
            <img src={puntitos_vertical_derecha} alt="Puntos verticales decoración" width="80%"/>
            <img src={puntitos_vertical_derecha} alt="Puntos verticales decoración" width="80%"/>
            <img src={puntitos_vertical_derecha} alt="Puntos verticales decoración" width="80%"/>
            <img src={puntitos_vertical_izquierda} alt="Puntos verticales decoración" width="80%"/>
            <img src={puntitos_vertical_izquierda} alt="Puntos verticales decoración" width="80%"/>
          </div>
          
        </div>
      </div>
    )
}

export default Clientes2
