import React, {useState} from 'react'
import logo_motorola_blanco from '../img/motorola-transparente.png'
import FichaTecnicaEP450 from './FichaTecnicaEP450';
import FichaTecnicaDEP450 from './FichaTecnicaDEP450';

const FichaTecnica = () => {

    const [activeComponent, setActiveComponent] = useState('component1');

    const showComponent = (component) => {
      setActiveComponent(component);
    };
  
  return (
    <div className='contenedor-ficha-tecnica'>
        <div className='seleccionador-modelo'>
            <img className="img-fluid" src={logo_motorola_blanco} width="10%" alt="Logo motorola blanco"/>
            <span>Seleccione un modelo:</span>
            <button 
                className={`boton-modelo ${activeComponent === 'component1' ? 'active-button' : ''}`} 
                onClick={() => showComponent('component1')}
            >
                Radio Industrial EP450
            </button>
            <button 
                className={`boton-modelo ${activeComponent === 'component2' ? 'active-button' : ''}`} 
                onClick={() => showComponent('component2')}
            >
                Radio Mototrbo DEP450
            </button>
        </div>
        <div className={`ficha-ep450 component ${activeComponent === 'component1' ? 'active' : ''}`}>
            <FichaTecnicaEP450></FichaTecnicaEP450>
        </div>
        <div className={`ficha-dep450 component ${activeComponent === 'component2' ? 'active' : ''}`}>
            <FichaTecnicaDEP450></FichaTecnicaDEP450>
        </div>
    </div>
  )
}

export default FichaTecnica
