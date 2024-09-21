import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
//import logo_motorola from '../img/motorola-sinfondo.png'
//import bymas_logo from '../img/bymas-logo.png'
import logo_motorola from '../img/motorola-sinfondo.webp'
import bymas_logo from '../img/bymas-logo.webp'
import '../css/Navbar3.css'; // Importa tus estilos CSS aquí
import LineaInicio2 from './LineaInicio2';

const Navbar3 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen); // Cambia el estado para abrir o cerrar el menú
  };

  /*
  const handleNavLinkClick = () => {
    setMenuOpen(false); // Cierra el menú al hacer clic en un enlace

  };
  */

  const handleNavLinkClick = (event, offset) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del navegador al hacer clic en el enlace

    const targetId = event.currentTarget.getAttribute('href').substring(1); // Obtiene el id del href sin el #
    const targetElement = document.getElementById(targetId); // Obtiene el elemento con el id correspondiente

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - offset; // Calcula la posición de desplazamiento ajustada
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // Realiza un desplazamiento suave
      });

      setMenuOpen(false); // Cierra el menú al hacer clic en un enlace
    }
  };

  const handleBrandClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setMenuOpen(false);
  }

  return (
    <div>
      <LineaInicio2 className="fixed-top"/>
      <Navbar bg="light" expand="lg" className="custom-navbar fixed-top" expanded={menuOpen} onToggle={handleToggleMenu}>
        <Container className="d-flex justify-content-between">
          <Navbar.Brand onClick={handleBrandClick}>
            <img
              src={bymas_logo}
              className="d-inline-block align-top navbar-logo-bymas"
              alt="Primer logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="custom-toggler ml-auto"
          >
            {menuOpen ? (
              <box-icon name='x' color='#0A5AA3' size="30px"></box-icon>
            ) : (
              <box-icon name='menu' color='#0A5AA3' size="26px"></box-icon>
            )}
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-auto custom-nav">
              <Nav.Link className="texto-link" href="#ventas3" onClick={(e) => handleNavLinkClick(e, 50)}>VENTAS</Nav.Link>
              <hr className='hr-navlinks'/>
              <Nav.Link className="texto-link" href="#why3" onClick={(e) => handleNavLinkClick(e, 50)}>ARRIENDOS</Nav.Link>
              <hr className='hr-navlinks'/>
              <Nav.Link className="texto-link" href="#servicio-tecnico3" onClick={(e) => handleNavLinkClick(e, 50)}>SERVICIO TÉCNICO</Nav.Link>
              <hr className='hr-navlinks'/>
              <Nav.Link className="texto-link" href="#clientes3" onClick={(e) => handleNavLinkClick(e, 30)}>CLIENTES</Nav.Link>
              <hr className='hr-navlinks'/>
              <Nav.Link className="texto-link" href="#footer3" onClick={(e) => handleNavLinkClick(e, 50)}>CONTACTO</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Brand href="#home">
            <img
              src={logo_motorola}
              className="d-inline-block align-top navbar-logo-motorola"
              alt="Segundo logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className='linea-final-nav'></div>
    </div>
    
  );
};

export default Navbar3;
