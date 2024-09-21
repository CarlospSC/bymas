import React, {useState} from 'react'
//import bymas_logo from '../img/bymas-logo.png'
import bymas_logo from '../img/bymas-logo.webp'

// Estilos
import '../css/Navbar2.css'

const Navbar2 = () => {

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
    <div className='nav2'>
      <div className="nav2-item nav2-links">
        <div className="nav-sublink bymas-nav"><a href="#" onClick={scrollToTop}><img className="img-fluid" src={bymas_logo} width="100em" alt="logo bymas"/></a></div>
        <div className="nav-sublink"><a href="#ventas2"><span>VENTAS</span></a></div>
        <div className="nav-sublink"><a href="#why2"><span>ARRIENDOS</span></a></div>
        <div className="nav-sublink"><a href="#servicio-tecnico2"><span>SERVICIO TÉCNICO</span></a></div>
        <div className="nav-sublink"><a href="#clientes2"><span>CLIENTES</span></a></div>
        <div className="nav-sublink" onClick={scrollToBottom}><span>CONTACTO</span></div>
      </div>
    </div>
  )
}

export default Navbar2
