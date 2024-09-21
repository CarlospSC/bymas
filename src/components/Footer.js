import React, { useState } from 'react';
//import ig_logo from '../img/ig-logo.png';
//import email_logo from '../img/email-logo.png';
//import bymas_logo from '../img/bymas-logo.png';
//import phone from '../img/Phone1.png'
//import correo from '../img/correo.png'
import ig_logo from '../img/ig-logo.webp';
import email_logo from '../img/email-logo.webp';
import bymas_logo from '../img/bymas-logo.webp';
import phone from '../img/Phone1.webp';
import correo from '../img/correo.webp';

// Estilos
import '../css/Footer.css'

const Footer = () => {
  const [isCursorOn, setIsCursorOn] = useState(false)

  const handleMouseEnter = () => {
    setIsCursorOn(true)
  }

  const handleMouseLeave = () => {
    setIsCursorOn(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const scrollToVentas = () => {
    window.scrollTo({
      top: 555,
      behavior: 'smooth'
    });
  }

  const scrollToArriendos = () => {
    window.scrollTo({
      top: 1620,
      behavior: 'smooth'
    });
  }

  const scrollToServicioTecnico = () => {
    window.scrollTo({
      top: 2420,
      behavior: 'smooth'
    });
  }

  const scrollToClientes = () => {
    window.scrollTo({
      top: 3290,
      behavior: 'smooth'
    });
  }

  const enviarCorreo = () => {
    // Obtener el valor del input
    var contenido = document.getElementById("contenidoCorreo").value;

    // Asunto predeterminado
    var asunto = "Consulta";

    // Correo electrónico destinatario
    var destinatario = "contacto@bymas.cl";

    // Crear el enlace de correo electrónico con el contenido, el asunto y el destinatario
    var mailtoLink = "mailto:" + encodeURIComponent(destinatario) + "?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(contenido);

    // Abrir el cliente de correo electrónico predeterminado con el contenido, el asunto y el destinatario
    window.location.href = mailtoLink;
  }

  return (
    <div className="footer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
      <div className='bymas-motorola'>
        {/* 
        <div className='div-puntitos-1'>
          <img src={puntos_linea} width="50%"/>
          <img src={puntos_linea} width="50%"/>
        </div>
        <div className='div-puntitos-2'>
          <img src={puntos_linea} width="50%"/>
          <img src={puntos_linea} width="50%"/>
        </div>
        */}
      </div>
      
      {/* 
      <hr className='footer-line'/>
      */}


      <div className='footer-columnas'>

            <div className='footer-columna c1'>
                <div className='footer-logo'>
                    <a href="https://www.instagram.com/bymas.spa" target="_blank" rel="noreferrer">
                        <img src={ig_logo} className="ig-logo" alt="Logo instagram" height="105em"/>
                    </a>
                    <div className='contorno'>
                        <p>bymas.spa</p>
                    </div>
                </div>
                <div className='footer-logo'>
                    <a href="mailto:contacto@bymas.cl?subject=Consulta">
                    <img src={email_logo} className="email-logo" alt="Logo correo" height="105em"/>
                    </a>
                    <div className='contorno'>
                        <p>contacto@bymas.cl</p>
                    </div>
                </div>
            </div>
            <div className='footer-columna c2'>
                <h3>Mapa del sitio</h3>
                <ul>
                  <li onClick={scrollToTop}><span>Inicio</span></li>
                  <li><a href="#ventas"><span>Ventas</span></a></li>
                  <li><a href="#why"><span>Arriendos</span></a></li>
                  <li><a href="#servicio-tecnico"><span>Servicio Técnico</span></a></li>
                  <li><a href="#clientes"><span>Clientes</span></a></li>
                </ul>
            </div>
            <div className='footer-columna c3'>
              <h3>Contacto</h3>
                <p className='texto-contactanos'>Contáctanos para más información sobre costos y servicios</p>
                <p><img src={phone} width="6%" alt="Logo teléfono"/> +569 30576898</p>
                {/* 
                <p className='via-email'><img src={correo} width="6%"/>  Vía email: </p>
                <input type="text" placeholder='Escribe aquí tu mensaje...'></input>
                <button>Enviar</button>
                */}
            </div>
            {/* 
            <div className='footer-columna c4'>
              <img className="img-fluid" src={imagen_radios} width="70%"/>
            </div>
            */}
            <div className={`footer-columna c5 ${isCursorOn ? 'aplicar-movimiento' : ''}`}>
              <img src={bymas_logo} className="bymas-logo animate__rubberBand" alt="Logo bymas" width="80%"/>
            </div>
        </div>
      {/* 
      <div className='linea-puntos'>
        <img src={puntos_opacidad} width="10%"/>
        <img src={puntos_opacidad} width="10%"/>
        <img src={puntos_opacidad} width="10%"/>
        <img src={puntos_opacidad} width="10%"/>
        <img src={puntos_opacidad} width="10%"/>
        <img src={puntos_opacidad} width="10%"/>
        <img src={puntos_opacidad} width="10%"/>
        <img src={puntos_opacidad} width="10%"/>
        <img src={puntos_opacidad} width="10%"/>
      </div>
      
      <Whatsapp></Whatsapp>
      */}
      
      <hr/>
      <div className='enviar-correo'>
        {/* 
        <img src={logo_motorola} alt="logo motorola" height="80em"/>
        */}
        <p className='via-email'><img src={correo} width="8%" alt="Logo email"/> Envíanos un correo con tu consulta: </p>
        <input id="contenidoCorreo" type="text" placeholder='Escribe aquí tu mensaje...'></input>
        <button onClick={enviarCorreo}>Enviar</button>
      </div>
      <hr/>
      <div className='derechos'><i>Desarrollado por Carmínet &#174;  Todos los derechos reservados.</i></div>
    </div>
  )
}

export default Footer
