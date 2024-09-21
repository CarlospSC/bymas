import React, {useState, useEffect, useRef} from 'react'
import '../css/Ventas3.css'
//import radio_grande from '../img/radio-sombra.png';
//import ondas_radio from '../img/frecuencias-1.png';
import radio_grande from '../img/radio-sombra.webp'
import ondas_radio from '../img/frecuencias-1.webp'
import puntos_celestes from '../img/puntos-celestes-1.png';
import puntos_grises from '../img/Puntos-grises.png';

//Estilos


const Ventas = () => {
  const [isOndasMoviendo, setIsOndasMoviendo] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Añadir la clase a los elementos hijos cuando la sección está en el viewport
          const elementsToAnimateLeft = sectionRef.current.querySelectorAll('.puntos-movimiento3');
          elementsToAnimateLeft.forEach(element => {
            element.classList.add('aparece');
            element.classList.add('animate__fadeInLeftBig');
          });
          const elementsToAnimateRight = sectionRef.current.querySelectorAll('.linea-puntos-ventas-grises3');
          elementsToAnimateRight.forEach(e => {
            e.classList.add('aparece');
            e.classList.add('animate__fadeInLeftBig');
          });
          setTimeout(() => {
            setIsOndasMoviendo(true);
          }, 1000);
        } else {
          // Eliminar la clase cuando la sección sale del viewport (opcional)
          setIsOndasMoviendo(false);
        }
      },
      {
        threshold: 0.35, // Ajusta esto según sea necesario
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
    <div
      className='ventas3 poppins-medium'
      id="ventas3"
      ref={sectionRef}
    >
      <div className="ventas3-contenedor">
        
        <div className='ventas3-izquierda'>
          <div className="ventas3-header">
            <div><h1>VENTAS</h1></div>
          </div>

          <div className='linea-puntos-ventas-celestes'>
            <div className="puntos-movimiento3">
              {[...Array(3)].map((_, i) => (
                <img key={i} src={puntos_celestes} alt="Puntos celestes decoración" className="puntos-img" />
              ))}
            </div>
          </div>

          <div className='ventas3-derecha'>
            <img className={`imagen-ondas ${isOndasMoviendo ? 'ondas-movimiento' : ''}`} src={ondas_radio} alt="Imagen ondas de radio" />
            <img src={radio_grande} alt="Radio motorola grande" className="radio-grande-img" />
          </div>

          <div className="linea-puntos-ventas-grises3">
            {[...Array(3)].map((_, i) => (
              <img key={i} src={puntos_grises} alt="Puntos grises decoración" className="puntos-grises-img" />
            ))}
          </div>

          <div className="caja-ventas3">
            <div className='texto-ventas3'>
              {['Radios análogas y digitales', 'Accesorios', 'Asesoramiento'].map((item, index) => (
                <div key={index} className='linea-circulo-p'>
                  <div className={`circulo ${index === 3 ? 'transparente' : ''}`}></div>
                  <p>{item}</p>
                </div>
              ))}
              <a href="https://api.whatsapp.com/send?phone=56930576898&text=Hola!,%20tengo%20una%20consulta..." target="_blank"><h3>Consulta por otras marcas</h3></a>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Ventas;
