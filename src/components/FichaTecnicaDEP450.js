import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap';

import InfoDEP450 from './InfoDEP450';
import Info2DEP450 from './Info2DEP450';
import Info3DEP450 from './Info3DEP450';
import Info4DEP450 from './Info4DEP450';


const FichaTecnicaDEP450 = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('next');
    const [hover, setHover] = useState(false);

    const componentes = [<InfoDEP450 />, <Info2DEP450 />, <Info3DEP450 />, <Info4DEP450 />];

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
                className="arrow-button arrow-right" 
                onClick={handleNext} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <box-icon 
                    name='chevrons-right' 
                    size="lg" 
                    color={hover ? "#00A0DD" : "black"} // Cambia los colores según tus necesidades
                ></box-icon>

            </button>
        </div>
        <div className={`slider ${direction}`}>
            {componentes[currentIndex]}
        </div>
    </div>
  )
}

export default FichaTecnicaDEP450
