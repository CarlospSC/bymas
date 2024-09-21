import React from 'react'

// PDFs
import pdf_dep from '../pdfs/Ficha-Tecnica-Motorola-DEP450.pdf'

const FichaTecnicaDEP4502 = () => {
  return (
    <div>
      <iframe title="PDF Viewer" className="pdf-iframe" src={pdf_dep}></iframe>
    </div>
  )
}

export default FichaTecnicaDEP4502
