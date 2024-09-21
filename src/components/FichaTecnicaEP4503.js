import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap';

import InfoEP4503 from './InfoEP4503';
import Info2EP4503 from './Info2EP4503';

const FichaTecnicaEP4503 = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('next');
    const [hover, setHover] = useState(false);

    const componentes = [<InfoEP4503 />, <Info2EP4503 />];

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
                className="arrow-button3 arrow-right3" 
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

export default FichaTecnicaEP4503
