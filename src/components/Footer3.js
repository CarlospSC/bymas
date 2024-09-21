import React, { useState, useEffect, useRef } from 'react';
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
import '../css/Footer3.css'


const Footer3 = () => {

    const [isCursorOn, setIsCursorOn] = useState(false)
    
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
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

    const handleFooterLinkClick = (event, offset) => {
      event.preventDefault(); // Evita el comportamiento predeterminado del navegador al hacer clic en el enlace
  
      const targetId = event.currentTarget.getAttribute('href').substring(1); // Obtiene el id del href sin el #
      const targetElement = document.getElementById(targetId); // Obtiene el elemento con el id correspondiente
  
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - offset; // Calcula la posición de desplazamiento ajustada
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth' // Realiza un desplazamiento suave
        });
      }
    };

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCursorOn(true);
        } else {
          // Eliminar la clase cuando la sección sale del viewport (opcional)
          setIsCursorOn(false);
        }
      },
      {
        threshold: 0.2, // Ajusta esto según sea necesario
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
      <div className="footer3" id="footer3" ref={sectionRef}> 
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
        <hr className='footer3-line'/>
        */}

        <div className='footer3-columnas'>
  
              <div className='footer3-columna c1'>
                  <div className='footer3-logo l1'>
                      <a href="https://www.instagram.com/bymas.spa" target="_blank" rel="noreferrer">
                          <img src={ig_logo} className="ig-logo" alt="Logo instagram" height="75em"/>
                      </a>
                      <div className='contorno'>
                          <p>bymas.spa</p>
                      </div>
                  </div>
                  <div className='footer3-logo l2'>
                      <a href="mailto:contacto@bymas.cl?subject=Consulta">
                      <img src={email_logo} className="email-logo" alt="Logo correo" height="75em"/>
                      </a>
                      <div className='contorno'>
                          <p>contacto@bymas.cl</p>
                      </div>
                  </div>
              </div>
              <div className='footer3-columna c2'>
                  <div className='subcolumna-c2 sc1'>
                    <ul id="lista-con-punto2">
                        <li><h3>Mapa del sitio</h3></li>
                    </ul>
                    <ul>
                      <li onClick={scrollToTop}><span>Inicio</span></li>
                      <li><a href="#ventas3" onClick={(e) => handleFooterLinkClick(e, 50)}><span>Ventas</span></a></li>
                      <li><a href="#why3" onClick={(e) => handleFooterLinkClick(e, 50)}><span>Arriendos</span></a></li>
                      <li><a href="#servicio-tecnico3" onClick={(e) => handleFooterLinkClick(e, 50)}><span>Servicio Técnico</span></a></li>
                      <li><a href="#clientes3" onClick={(e) => handleFooterLinkClick(e, 30)}><span>Clientes</span></a></li>
                    </ul>
                  </div>
                  <div className='subcolumna-c2 sc2'>
                    <ul id="lista-con-punto2">
                        <li><h3>Contacto</h3></li>
                    </ul>
                    <p className='texto-contactanos'>Contáctanos para más información sobre costos y servicios</p>
                    <p><img src={phone} width="14%" alt="Logo teléfono"/> +569 30576898</p>
                  </div>

                  
              </div>
              {/* 
              <div className='footer3-columna c3'>
                <h3>Contacto</h3>
                <p className='texto-contactanos'>Contáctanos para más información sobre costos y servicios</p>
                <p><img src={phone} width="6%"/> +569 30576898</p>
                  <p className='via-email'><img src={correo} width="6%"/>  Vía email: </p>
                  <input type="text" placeholder='Escribe aquí tu mensaje...'></input>
                  <button>Enviar</button>
              </div>
              */}
              {/* 
              <div className='footer-columna c4'>
                <img className="img-fluid" src={imagen_radios} width="70%"/>
              </div>
              */}
              <div className={`footer3-columna c5 ${isCursorOn ? 'aplicar-movimiento' : ''}`}>
                <img src={bymas_logo} className="bymas-logo animate__rubberBand" alt="Logo bymas" width="50%"/>
              </div>
              <div className='footer3-columna c6'>
                <hr className='footer3-line'/>
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
        <div className='enviar-correo3'>
          <div className='enviar-correo-cajita1'>
            <p className='via-email'><h3><img src={correo} width="8%" alt="Logo email"/>Envíanos un correo con tu consulta: </h3></p>
          </div>
          <div className='enviar-correo-cajita2'>
            <input id="contenidoCorreo" type="text" placeholder='Escribe aquí tu mensaje...'></input>
            <button onClick={enviarCorreo}>Enviar</button>
          </div>
        </div>
        <hr/>
        <div className='derechos3'><i>Desarrollado por Carmínet &#174;  Todos los derechos reservados.</i></div>
      </div>
    )
  }

export default Footer3
