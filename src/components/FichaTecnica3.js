import React, {useState} from 'react'
import logo_motorola_blanco from '../img/motorola-transparente.png'
import FichaTecnicaEP4503 from './FichaTecnicaEP4503';
import FichaTecnicaDEP4503 from './FichaTecnicaDEP4503';

const FichaTecnica3 = () => {

    const [activeComponent, setActiveComponent] = useState('component1');

    const showComponent = (component) => {
      setActiveComponent(component);
    };

  return (
    <div className='contenedor-ficha-tecnica'>

        <h3 className='h3-hoja'>HOJA DE ESPECIFICACIONES</h3>

        <div className='seleccionador-modelo2'>
            <div className='col-12 columna-seleccionador'>
                <span>Seleccione un modelo:</span>
                <img className="img-fluid" src={logo_motorola_blanco} width="32%" alt="Logo motorola blanco"/>
                
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
            <FichaTecnicaEP4503 />
        </div>
        <div className={`ficha-dep450 component ${activeComponent === 'component2' ? 'active' : ''}`}>
            <FichaTecnicaDEP4503 />
        </div>
    </div>
  )
}

export default FichaTecnica3
