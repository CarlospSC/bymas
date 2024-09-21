import { useMediaQuery } from 'react-responsive';
import 'intersection-observer';

//Import de estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/Estilos.css'
import '../src/css/Why.css'
import '../src/css/ServicioTecnico.css'
import '../src/css/Clientes.css'
import '../src/css/Footer.css'
import '../src/css/FichaTecnica.css'
import '../src/css/FichaTecnica2.css'
import '../src/css/FichaTecnica3.css'

//Import de componentes
import LineaInicio2 from './components/LineaInicio2';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Navbar3 from './components/Navbar3'
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Hero3 from './components/Hero3';
import LineaInicio from './components/LineaInicio';
import Ventas from './components/Ventas';
import Ventas2 from './components/Ventas2';
import Ventas3 from './components/Ventas3';
import Why from './components/Why';
import Why2 from './components/Why2';
import Why3 from './components/Why3';
import ServicioTecnico from './components/ServicioTecnico';
import ServicioTecnico2 from './components/ServicioTecnico2';
import ServicioTecnico3 from './components/ServicioTecnico3';
import Clientes from './components/Clientes';
import Clientes2 from './components/Clientes2';
import Clientes3 from './components/Clientes3';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import Footer3 from './components/Footer3';


//Componentes generales

import Whatsapp from './components/Whatsapp';
import Whatsapp3 from './components/Whatsapp3';
import Rombos from './components/Rombos';


function App() {

  const isDesktop = useMediaQuery({ minWidth: 1366 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1366 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="App">
      {isDesktop && <LineaInicio2 />}
      {isTablet && <LineaInicio2 />}
      {isDesktop && <Navbar />}
      {isTablet && <Navbar2 />}
      {isMobile && <Navbar3 />}
      
      {isDesktop && <Hero />}
      {isTablet && <Hero2 />}
      {isMobile && <Hero3 />}
      <LineaInicio></LineaInicio>
      <div className='contenedor-fondo'>
        {isDesktop && <Rombos></Rombos>}

        <div className="content">

          {isDesktop && <Ventas />}
          {isTablet && <Ventas2 />}
          {isMobile && <Ventas3 />}

          {isDesktop && <Why />}
          {isTablet && <Why2 />}
          {isMobile && <Why3 />}

          {isDesktop && <ServicioTecnico />}
          {isTablet && <ServicioTecnico2 />}
          {isMobile && <ServicioTecnico3 />}

          {isDesktop && <Clientes />}
          {isTablet && <Clientes2 />}
          {isMobile && <Clientes3 />}
        </div>
      </div>
      <LineaInicio></LineaInicio>
      {isDesktop && <Footer />}
      {isTablet && <Footer2 />}
      {isMobile && <Footer3 />}

      {isDesktop && <Whatsapp />}
      {isTablet && <Whatsapp />}
      {isMobile && <Whatsapp3 />}
    </div>
  );
}

export default App;
