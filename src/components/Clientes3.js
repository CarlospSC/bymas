import React, { useEffect, useRef } from 'react'
import 'intersection-observer';
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
import '../css/Clientes3.css'



const Clientes3 = () => {

    /*
    const [isHovered, setIsHovered] = useState(true);
  
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(true);
    };
  
    const handleTouchStart = () => {
      setIsHovered(true);
    };

    const handleTouchEnd = () => {
      setIsHovered(true);
    };
    */

    const sectionRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Añadir la clase a los elementos hijos cuando la sección está en el viewport
            const elementsToAnimateRight = sectionRef.current.querySelectorAll('.icons-line-right');
            elementsToAnimateRight.forEach(element => {
              element.classList.add('animate__fadeInRight');
            });

            const elementsToAnimateLeft = sectionRef.current.querySelectorAll('.icons-line-left');
            elementsToAnimateLeft.forEach(e => {
              e.classList.add('animate__fadeInLeft');
            });
          } else {
            // Eliminar la clase cuando la sección sale del viewport (opcional)
                        
          }
        },
        {
          threshold: 0.5, // Ajusta esto según sea necesario
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
      <div className='clientes3-completo' id="clientes3" ref={sectionRef}>
        <div className='linea-inicio-clientes3'></div>
        <div className='clients3'>  
          <div className='linea-puntitos-vertical'>
            <img src={puntitos_vertical_izquierda} alt="Puntos verticales decoración" width="80%"/>
            <img src={puntitos_vertical_izquierda} alt="Puntos verticales decoración" width="80%"/>
            <img src={puntitos_vertical_izquierda} alt="Puntos verticales decoración" width="80%"/>
            <img src={puntitos_vertical_izquierda} alt="Puntos verticales decoración" width="80%"/>
            <img src={puntitos_vertical_izquierda} alt="Puntos verticales decoración" width="80%"/>
          </div>
          <div className='clients3-contenedor'>
            <div className='clients3-line header-line'>
              <h1>CLIENTES Y EVENTOS QUE HEMOS COMUNICADO</h1>
            </div>

            {/* 
            <div className={`clients3-line first-line ${isHovered ? 'animate__fadeInRight' : 'not__Hovered'}`}>
            */}
            <div className="clients3-line first-line icons-line-right">
              <img src={lollapalooza_logo} width="70%" alt="Logo Lollapalooza"/>
            </div>
            {/* 
            <div className={`clients3-line second-line ${isHovered ? 'animate__fadeInLeft' : 'not__Hovered'}`}>
            */}
            <div className="clients3-line second-line icons-line-left">
              <img src={movistar_logo} width="50%" alt="Logo Movistar arena"/>
              <img src={seguridad_logo} width="30%" alt="Logo Valgo seguridad"/>
            </div>
            {/* 
            <div className={`clients3-line third-line ${isHovered ? 'animate__fadeInRight' : 'not__Hovered'}`}>
            */}
            <div className="clients3-line third-line icons-line-right">
              <img src={banqueteria_logo} width="42%" alt="Logo Banquetería JJPG"/>
              <img src={viña_logo} width="43%" alt="Logo Viña del mar"/>
            </div>
            <div className="clients3-line fourth-line icons-line-left">
              <img src={primavera_logo} width="50%" alt="Logo Primavera sound"/>
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
          </div>
          
        </div>
      </div>
    )
}

export default Clientes3
