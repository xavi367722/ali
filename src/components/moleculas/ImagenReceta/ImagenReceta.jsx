import React from 'react'
import "./imagen.css"

function ImagenReceta(props) {
  return (
    <div className="DivImagen">
        <img src={props.imagen} alt="" className='ImagenReceta'/>
    </div>
  )
}

export default ImagenReceta