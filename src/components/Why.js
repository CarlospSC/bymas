import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Modal } from 'react-bootstrap';
import FichaTecnica from './FichaTecnica';
//import radio_ep_sinlogo from '../img/radio-ep450-sinlogo.png'
import radio_ep_sinlogo from '../img/radio-ep450-sinlogo.webp'
//import radio_dep from '../img/radio-dep450.png'
import radio_dep from '../img/radio-dep450.webp'

const Why = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="why poppins-medium" id="why">
      <div className='why-contenedor'>
        <div className='why-text'>
          <div className='why-content'>
            <div className="carousel">
              <Carousel data-bs-theme="dark" interval={5500} className='why-carrusel'>
                <Carousel.Item>
                  <div className='why-header por-que'><h1>¿POR QUÉ ARRENDAR?</h1></div>
                  <div className='why-info'>
                    <ul>
                      <li>
                          <h3>Disminuye los costos por proyecto</h3>
                          <p>No gaste en radios que una vez terminado el proyecto ya no utilizarás.</p>
                      </li>
                      <li>
                          <h3>Mejora la administración de inventario</h3>
                          <p>No sumes trabajos adicionales a tu administración. No adquieras pasivos adicionales.</p>
                      </li>
                      <li>
                          <h3>Disminuye gastos innecesarios en equipos</h3>
                          <p>Evitas pagar por la programación, reparación, mantención y administración de los equipos.</p>
                      </li>
                      <li>
                          <h3>Mejora la productividad y la respuesta a falla</h3>
                          <p>No te quedas sin equipo, en caso de necesitarlo el cambio es inmediato.</p>
                      </li>
                    </ul>
                  </div>
                  <div className='why-footer'>
                    <h3>Olvídate de las mantenciones</h3>
                    <p>No agregues costos extra a tu empresa, las mantenciones y desgaste de equipos son por nuestra parte.</p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className='why-header que'><h1>¿QUÉ ARRENDAMOS?</h1></div>
                  <div className='why-textos-informacion'>
                    <ul>
                      <li>
                          <h3>Radios portátiles de gran rendimiento </h3>
                          <p>Busca el modelo que más se adapta a tus necesidades</p>
                      </li>
                      <li>
                        <div className='contenedor-boton-mas-informacion'>
                          <box-icon type="solid" name='chevrons-right' size="54px" color="#12829b"></box-icon>
                          <span className='boton-mas-informacion' onClick={handleShow}>Ver ficha técnica</span>
                        </div>
                      </li>
                      <li className='li-imagenes'>
                        {/* 
                        <img className="img-fluid" src={imagen_radios} width="55%"/>
                        <img className="img-fluid" src={radio_ep} width="10%"/>
                        */}
                        <img className="img-fluid" src={radio_ep_sinlogo} alt="Radio ep motorola" width="25%"/>
                        <img className="img-fluid" src={radio_dep} alt="Radio dep motorola" width="25%"/>
                      </li>
                      
                      <Modal show={show} onHide={handleClose} centered fullscreen={true} animation={true}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                          <FichaTecnica></FichaTecnica>
                        </Modal.Body>
                        <Modal.Footer className="modal-footer-left3">
                          <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </ul>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          {/* 
          <div className='why-footer'>
            <h3>Olvídate de las mantenciones</h3>
            <p>No agregues costos extra a tu empresa, las mantenciones y desgaste de equipos son por nuestra parte.</p>
          </div>
          */}
        </div>
      </div>
    </div>
  )
}

export default Why
