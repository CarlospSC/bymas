import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap';

import InfoDEP4503 from './InfoDEP4503';
import Info2DEP4503 from './Info2DEP4503';
import Info3DEP4503 from './Info3DEP4503';
import Info4DEP4503 from './Info4DEP4503';


const FichaTecnicaDEP4503 = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('next');
    const [hover, setHover] = useState(false);

    const componentes = [<InfoDEP4503 />, <Info2DEP4503 />, <Info3DEP4503 />, <Info4DEP4503 />];

    const handleNext = () => {
        setDirection('next');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % componentes.length);
    };

    const handlePrev = () => {
        setDirection('prev');
        setCurrentIndex((prevIndex) => (prevIndex - 1 + componentes.length) % componentes.length);
    };

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

  return (
    <div>
        <div className="navigation">
            {/*
            <button className="arrow-button arrow-left" onClick={handlePrev}>
                ⬅
            </button>
            */}
            <button 
                className="arrow-button arrow-right3" 
                onClick={handleNext} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <box-icon 
                    name='chevrons-right' 
                    size="30px" 
                    color={"black"} // Cambia los colores según tus necesidades
                ></box-icon>

            </button>
        </div>
        <div className={`slider ${direction}`}>
            {componentes[currentIndex]}
        </div>
    </div>
  )
}

export default FichaTecnicaDEP4503
