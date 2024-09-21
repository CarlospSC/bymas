import React, {useState} from 'react'
//import radio_grande from '../img/radio-sombra.png'
//import ondas_radio from '../img/frecuencias-1.png'
import radio_grande from '../img/radio-sombra.webp'
import ondas_radio from '../img/frecuencias-1.webp'
import puntos_celestes from '../img/puntos-celestes-1.png'
import puntos_grises from '../img/Puntos-grises.png'

// Estilos
import '../css/Ventas.css'

const Ventas = () => {

  const [isPointsVisible, setIsPointsVisible] = useState(false);
  const [isLineVisible, setIsLineVisible] = useState(false);
  const [isOndasMoviendo, setIsOndasMoviendo] = useState(false);

    const handleMouseEnter = () => {
      setIsPointsVisible(true);
      setIsLineVisible(true);
      setTimeout(() => {
        setIsOndasMoviendo(true);
      }, 1000);
    };
  
    const handleMouseLeave = () => {
      setIsPointsVisible(true);
      setIsLineVisible(true);
    };

    const handleTouchStart = () => {
      setIsPointsVisible(true);
      setIsLineVisible(true);
    };

    const handleTouchEnd = () => {
      setIsPointsVisible(true);
      setIsLineVisible(true);
    };

  return (
    <div className='ventas poppins-medium' 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      id='ventas'
    >
      <div className="ventas-contenedor">

        <div className='linea-puntos-ventas-celestes'>
          <div className={`puntos-movimiento ${isPointsVisible ? 'visible' : ''}`}>
            <img src={puntos_celestes} alt="Puntos celestes decoración" height="85%"/>
            <img src={puntos_celestes} alt="Puntos celestes decoración" height="85%"/>
            <img src={puntos_celestes} alt="Puntos celestes decoración" height="85%"/>
            <img src={puntos_celestes} alt="Puntos celestes decoración" height="85%"/>
            <img src={puntos_celestes} alt="Puntos celestes decoración" height="85%"/>
            <img src={puntos_celestes} alt="Puntos celestes decoración" height="85%"/>
          </div>
        </div>
        
        <div className='ventas-izquierda'>
          <div className="ventas-header">
            <div><h1>VENTAS</h1></div>
            {/*
            <div className="puntos"><img src={puntos_transparentes}/></div>
            */}
          </div>
          <div className="caja-ventas">
            <div className='texto-ventas'>
              <div className='linea-circulo-p'><div className='circulo'></div><p>Radios análogas</p></div>
              <div className='linea-circulo-p'><div className='circulo transparente'></div><p>y digitales</p></div>
              <div className='linea-circulo-p'><div className='circulo'></div><p>Accesorios</p></div>
              <div className='linea-circulo-p'><div className='circulo'></div><p>Asesoramiento</p></div>
              <a href="https://api.whatsapp.com/send?phone=56930576898&text=Hola!,%20tengo%20una%20consulta..." target="_blank"><h3>Consulta por otras marcas</h3></a>
            </div>
          </div>
        </div>
    
        <div className='ventas-derecha'>
          <img className={`imagen-ondas ${isOndasMoviendo ? 'ondas-movimiento' : ''}`} src={ondas_radio} alt="Imagen ondas de radio" height="50%"/>
          <img src={radio_grande} alt="Radio motorola grande" height="70%"/>
        </div>
      </div>

      <div className={`linea-puntos-ventas-grises ${isLineVisible ? 'visible' : ''}`}>
        <img src={puntos_grises} alt="Puntos grises decoración" width="13%"/>
        <img src={puntos_grises} alt="Puntos grises decoración" width="13%"/>
        <img src={puntos_grises} alt="Puntos grises decoración" width="13%"/>
        <img src={puntos_grises} alt="Puntos grises decoración" width="13%"/>
        <img src={puntos_grises} alt="Puntos grises decoración" width="13%"/>
      </div>
      
    </div>
  )
}

export default Ventas
