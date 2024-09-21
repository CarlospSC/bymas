import React, {useState} from 'react'
//import radio_grande from '../img/radio-sombra.png';
//import ondas_radio from '../img/frecuencias-1.png';
import radio_grande from '../img/radio-sombra.webp'
import ondas_radio from '../img/frecuencias-1.webp'
import puntos_celestes from '../img/puntos-celestes-1.png';
import puntos_grises from '../img/Puntos-grises.png';

// Estilos
import '../css/Ventas2.css'

const Ventas2 = () => {
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
    <div
      className='ventas2 poppins-medium'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      id="ventas2"
    >
      <div className="ventas2-contenedor">
        
        <div className='ventas2-izquierda'>
          <div className="ventas2-header">
            <div><h1>VENTAS</h1></div>
          </div>

          <div className='linea-puntos-ventas-celestes'>
            <div className={`puntos-movimiento2 ${isPointsVisible ? 'animate__fadeInLeftBig' : ''}`}>
              {[...Array(3)].map((_, i) => (
                <img key={i} src={puntos_celestes} alt="Puntos celestes decoración" className="puntos-img" />
              ))}
            </div>
          </div>

          <div className='ventas2-derecha'>
            <img className={`imagen-ondas ${isOndasMoviendo ? 'ondas-movimiento' : ''}`} src={ondas_radio} alt="Imagen ondas de radio" />
            <img src={radio_grande} alt="Radio motorola grande" className="radio-grande-img" />
          </div>

          <div className={`linea-puntos-ventas-grises2 ${isLineVisible ? 'animate__fadeInLeftBig' : ''}`}>
            {[...Array(3)].map((_, i) => (
              <img key={i} src={puntos_grises} alt="Puntos grises decoración" className="puntos-grises-img" />
            ))}
          </div>

          <div className="caja-ventas2">
            <div className='texto-ventas2'>
              {['Radios análogas y digitales', 'Accesorios', 'Asesoramiento'].map((item, index) => (
                <div key={index} className='linea-circulo-p'>
                  <div className={`circulo ${index === 3 ? 'transparente' : ''}`}></div>
                  <p>{item}</p>
                </div>
              ))}
              <div className='consulta-otras-marcas'>
                <a href="https://api.whatsapp.com/send?phone=56930576898&text=Hola!,%20tengo%20una%20consulta..." target="_blank"><h3>Consulta por otras marcas</h3></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Ventas2;
