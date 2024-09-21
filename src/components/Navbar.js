import React from 'react'
//import logo_motorola from '../img/motorola-sinfondo.png'
//import bymas_logo from '../img/bymas-logo.png'
import logo_motorola from '../img/motorola-sinfondo.webp'
import bymas_logo from '../img/bymas-logo.webp'

// Estilos
import '../css/Navbar.css'

const Navbar = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }

  return (
    <div className='nav'>
      <div className="nav-item nav-links">
        <div className="nav-sublink bymas-nav"><a href="#" onClick={scrollToTop}><img className="img-fluid" src={bymas_logo} width="100em" alt="logo bymas"/></a></div>
        <div className="nav-sublink"><a href="#ventas"><span>VENTAS</span></a></div>
        <div className="nav-sublink"><a href="#why"><span>ARRIENDOS</span></a></div>
        <div className="nav-sublink"><a href="#servicio-tecnico"><span>SERVICIO TÉCNICO</span></a></div>
        <div className="nav-sublink"><a href="#clientes"><span>CLIENTES</span></a></div>
        <div className="nav-sublink" onClick={scrollToBottom}><span>CONTACTO</span></div>
      </div>
      <div className="nav-item nav-motorola">
        <img className="logo-motorola" src={logo_motorola} alt="logo motorola" height="80em"/>
      </div>
    </div>
  )
}

export default Navbar
