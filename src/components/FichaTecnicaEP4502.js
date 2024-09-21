import React from 'react'

// PDFs
import pdf_ep from '../pdfs/Ficha-Tecnica-Motorola-EP450.pdf'


const FichaTecnicaEP4502 = () => {
  return (
    <div>
      <iframe title="PDF Viewer" className="pdf-iframe" src={pdf_ep}></iframe>
    </div>
  )
}

export default FichaTecnicaEP4502
