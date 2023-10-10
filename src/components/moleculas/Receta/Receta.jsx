import React from 'react'
import Style from "./Receta.module.css"

function Receta() {
    const elementos = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

  return (
    <div>
  
  <Title
titulo="dsksdkk"
/>
<div>
        <h1>Mi Lista</h1>
        <ListaUl items={elementos} />
      </div>

    </div>
  )
}

export default Receta