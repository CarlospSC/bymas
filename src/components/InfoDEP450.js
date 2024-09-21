import React from 'react'
//import radio_dep from '../img/radio-dep450.png'
import radio_dep from '../img/radio-dep450.webp'

const InfoDEP450 = () => {
  return (
    <div>
        <div className='ficha-tecnica'>
            <div className='c-izquierda'>
                <img className="img-fluid" src={radio_dep} width="88%" alt="Radio motorola dep450 grande"/>
            </div>
            <div className='c-derecha'>
                <div className='titulos'>
                    <h1>Radio Portátil MOTOTRBO™ DEP™450</h1>
                    <h2>HOJA DE ESPECIFICACIONES</h2>
                </div>
                
                <hr className='linea-separacion'></hr>

                <div className='contenedor-textos'>
                    <div className='texto-izquierda'>
                        <h3>SIMPLEMENTE MÁS EFICIENCIA</h3>
                        <h4 className='texto-introduccion'>
                            Usted quiere conectar su fuerza de
                            trabajo de la manera más eficiente
                            posible. Espera que sus radios sean
                            asequibles, y lo suficientemente
                            flexibles para evolucionar con usted.
                            Ahora existe un terminal portátil que
                            le ofrece comunicaciones de voz de
                            excelente calidad hoy, y un medio para
                            migrar a comunicaciones de voz digital
                            nítidas y claras cuando esté listo.
                        </h4>
                        <p>
                            Versátil y potente, MOTOTRBO™ combina lo
                            mejor de la funcionalidad de radio de dos vías
                            con lo último en tecnología digital. El portafolio
                            MOTOTRBO ofrece el dispositivo adecuado para el
                            usuario correcto, desde terminales portátiles de voz
                            únicamente hasta radios de voz y datos completos
                            en funcionalidades.
                        </p>
                        <p>
                            El resistente radio MOTOTRBO DEP™450 está
                            disponible como radio de modo dual digital,
                            con todos los beneficios de la tecnología más
                            moderna, desde una calidad de audio extra fuerte
                            hasta mayor cobertura y duración de batería. Este
                            terminal portátil accesible es compatible con las
                            funciones avanzadas de MOTOTRBO esenciales
                            para su empresa; por ejemplo, la posibilidad
                            de interrumpir una transmisión para priorizar
                            comunicaciones críticas.
                        </p>
                        <p>
                            Ahora puede mejorar la eficiencia de sus
                            operaciones con la comunicación de voz simplificada
                            que más le conviene.
                        </p>                        
                    </div>
                    <div className='texto-derecha'>
                        <h3>CARACTERÍSTICAS</h3>
                        <p>• Modo dual digital</p>
                        <p>• Comunicaciones de voz</p>
                        <p>• Modo directo de capacidad dual</p>
                        <p>• Cumple con los estándares de Radio Móvil Digital (DMR)</p>
                        <p>• Cumple con las reglas de Narrowbanding</p>
                        <p>• Clasificación IP54</p>
                        <p>• 16 canales</p>
                        <p>• 2 botones programables</p>
                        <p>• CSQ/PL/DPL/inv-DPL</p>
                        <p>• Bloqueo de canal ocupado</p>
                        <p>• Canal de recepción dedicado</p>

                        <p>• AMBE +2™</p>
                        <p>• Transmisión activada por voz (VOX) integrada</p>
                        <p>• Eliminación de canal ruidoso</p>

                        <p>• Limitador de tiempo de transmisión</p>
                        <p>• Repetidor / comunicación directa</p>
                        
                        <p>
                        • Señalización MDC-1200
                            <span>- PTT-ID (envío)</span>
                            <span>- Verificación del Radio (recepción)</span>
                            <span> - Inhibición Selectiva del Radio (recepción)</span>
                        </p>
                        <p>
                        • Señalización Quik-Call II
                            <span>- Llamada de Alerta (recepción)</span>
                            <span>- Llamada Selectiva (recepción) </span>
                        </p>
                        
                        <h3 className='accesorios'>OPCIONES</h3>
                        <p>•Suite de Administración de Radio</p>
                        <p>•Transmit Interrupt (decodificación únicamente)</p>
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
        <div className='texto-en-gris'>
            <div className='caja-texto-dep poppins-medium'>
                <p>
                    COMUNICACIONES DE VOZ SIMPLES
                    PARA EL USUARIO DIARIO QUE DESEA PERMANECER CONECTADO
                </p>
            </div>
        </div>
    </div>
  )
}

export default InfoDEP450
