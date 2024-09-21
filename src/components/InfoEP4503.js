import React from 'react'
//import radio_ep from '../img/rsz_radio-ep450.png'
import radio_ep from '../img/rsz_radio-ep450.webp'
import logo_motorola from '../img/motorola-letras-blancas.png'


const InfoEP4503 = () => {
  return (
    <div>
      <div className='ficha-tecnica3'>
            {/* 
            <div className='c-izquierda'>
                <img className="img-fluid" src={radio_ep} width="20%"/>
            </div>
            */}
            <div className='c-derecha'>

                <hr className='linea-separacion1'></hr>

                <div className='titulos'>
                    <img className="img-fluid img-radio" src={radio_ep} width="30%" alt="Radio motorola ep450 grande"/>
                    <div className='titulos-2'>
                        <h1>Radio Portátil Industrial EP450™</h1>
                        {/* 
                        <h2>HOJA DE ESPECIFICACIONES</h2>
                        */}
                    </div>
                </div>
                
                <hr className='linea-separacion2'></hr>

                <div className='contenedor-textos'>
                    <div className='texto-izquierda'>
                        <h3>BENEFICIOS</h3>
                        <h4>16 canales</h4>
                        <p>
                            Organice sus equipos de trabajo en
                            varios grupos de conversación individuales. Una herramienta ideal para
                            operaciones complejas en las que la
                            comunicación entre equipos diferentes es escencial.
                        </p>
                        <h4>Rastreo de doble prioridad</h4>
                        <p>
                            Utilice el rastreo de actividades en el
                            canal prioritario más frecuentemente
                            para evitar perder información crítica.
                            Use esta función para situaciones
                            donde necesite supervisar uno o dos
                            grupos de trabajo con mayor frecuencia que a otros.
                        </p>
                        <h4>Transmisión activada por voz (VOX) integrada</h4>
                        <p>
                            Con ayuda de un accesorio apropiado,
                            usted puede hablar y escuchar una conversación por radio sin tener que usar
                            las manos. No interrumpa sus tareas,
                            ahorre tiempo y sea más productivo.
                        </p>
                        <h4>Inhibición selectiva del radio</h4>
                        <p>
                            Su radio está equipado con un rasgo
                            de seguridad que le permite temporalmente rastrear unidades sin operar
                            cuando una señal inhibida es enviada
                            desde la estación base. Esta característica se usa comunmente para los
                            radios inhabilitados, en caso de robo o
                            por razones de control del sistema.
                            Cuando el radio ha sido localizado por
                            la estación base, todos los controles
                            quedarán fuera de servicio a excepción del botón Encendido / Apagado.
                        </p>
                        <h4>PTT-ID (envío)</h4>
                        <p>
                            Usted optimiza su tiempo identificando rápidamente a los usuarios de
                            los radios al momento de iniciar una
                            transmisión.
                        </p>
                        
                    </div>
                    <div className='texto-derecha'>
                        <h3>CARACTERÍSTICAS</h3>
                        <p>• 16 Canales</p>
                        <p>• 2 Botones Programables</p>
                        <p>• CSQ / PL / DPL / inv-DPL</p>
                        <p>• Bloqueo de Canal Ocupado</p>
                        <p>• Canal de Recepción Dedicado</p>
                        <p>• Compresión de Voz (X-Pand™)</p>
                        <p>• Transmisión Activada por Voz (VOX) Integrada</p>
                        <p>• Eliminación de Canal Ruidoso</p>
                        <p>• Llamada de Alerta</p>
                        <p>• Limitador de Tiempo de Transmisión</p>
                        <p>• Repetidor / Comunicación Directa</p>
                        <p>• Rastreo de Doble Prioridad</p>
                        <p>
                        • Señalización MDC-1200
                            <span>- PTT-ID (envío)</span>
                            <span>- Verificación del Radio (recepción)</span>
                            <span>- Inhibición Selectiva del Radio (recepción)</span>
                        </p>
                        <p>
                        • Señalización Quik-Call II
                            <span>- Llamada de Alerta (recepción)</span>
                            <span>- Llamada Selectiva (recepción)</span>
                        </p>
                        <p>
                        • Señalización DTMF
                            <span>- PTT-ID (envío)</span>
                        </p>
                        <p>• Puerto para Tarjetas Opcionales</p>
                        
                        <h3 className='accesorios'>ACCESORIOS</h3>
                        <p>
                            Para optimizar el funcionamiento de
                            sus radios, Motorola cuenta con una
                            amplia gama de Accesorios Originales
                            que le permite satisfacer cada una de
                            sus necesidades de comunicación.
                            Los Accesorios Originales Motorola
                            son desarrollados cuidando cada detalle, para asegurarle así, efectividad y
                            durabilidad.
                        </p>
                    </div>
                </div>
                <hr></hr>
                {/* 
                <div className='caja-boton-detalles'>
                    <button className='boton-detalles'>Ver más detalles</button>
                </div>
                */}
            </div>
        </div>
        <div className='texto-en-celeste3'>
            <div className='caja-logo'>
                <img className="img-fluid" src={logo_motorola} width="80%" alt="Logo motorola blanco"/>
            </div>
            <div className='caja-texto poppins-medium'>
                <p>
                    75 años de compromiso. Motorola continúa construyendo sólidas relaciones con
                    sus clientes, basadas en la experiencia y la calidad tecnológica. Una empresa líder,
                    que brinda novedosas soluciones de comunicación e información.
                </p>
                <p>
                    Soluciones confiables diseñadas a medida que le permitirán aumentar el
                    desempeño de sus operaciones y satisfacer cada uno de los requerimientos del
                    negocio.
                </p>
                <p>
                    El radio EP450 posee varias opciones y características que destacan su desempeño:
                    16 canales, varios rangos de frecuencias, capacidad de grupo dentro de una misma
                    frecuencia (PL / DPL), VOX integrada y múltiples opciones de baterías.
                </p>
            </div>
        </div>
    </div>
  )
}

export default InfoEP4503
