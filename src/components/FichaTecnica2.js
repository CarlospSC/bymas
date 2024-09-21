import React, {useState} from 'react'
import logo_motorola_blanco from '../img/motorola-transparente.png'
import FichaTecnicaEP4502 from './FichaTecnicaEP4502';
import FichaTecnicaDEP4502 from './FichaTecnicaDEP4502';

const FichaTecnica2 = () => {

    const [activeComponent, setActiveComponent] = useState('component1');

    const showComponent = (component) => {
      setActiveComponent(component);
    };

  return (
    <div className='contenedor-ficha-tecnica'>
        <div className='seleccionador-modelo2'>
            <div className='col-12 columna-seleccionador'>
                <span>Seleccione un modelo:</span>
                <img className="img-fluid" src={logo_motorola_blanco} width="25%" alt="Logo motorola blanco"/>
                
            </div>
            <div className='col-12 columna-botones'>
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
            
        </div>
        <div className={`ficha-ep450 component ${activeComponent === 'component1' ? 'active' : ''}`}>
            <FichaTecnicaEP4502></FichaTecnicaEP4502>
        </div>
        <div className={`ficha-dep450 component ${activeComponent === 'component2' ? 'active' : ''}`}>
            <FichaTecnicaDEP4502></FichaTecnicaDEP4502>
        </div>
    </div>
  )
}

export default FichaTecnica2
