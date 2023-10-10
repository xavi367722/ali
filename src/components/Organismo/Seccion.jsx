import React from 'react'
import "./Seccion.css"
import ListaUl from '../atomos/Lista/ListaUl'
import ListaLi from '../atomos/ListaLi/ListaLi';
import Title from '../atomos/Titulo/Title';
import ImagenReceta from '../moleculas/ImagenReceta/ImagenReceta';
import img from "../../img/ceviche.jpg"

function Seccion(props) {
   
      
  const divStyle = {
    backgroundColor: props.colorfondo, 
    color: props.color,// Utiliza la prop para establecer la imagen de fondo
    flexDirection: props.orientacion,
};

      
      

  return (
    <div className="DivSeccion" style={divStyle}>


        <div className='DivImagen1'>
            <ImagenReceta
            imagen={props.imagenReceta}
            />
        </div>

    <div className="DivReceta">
      <Title
      titulo={props.tituloReceta}
      />

      <div className='DivLista1'>
     
      <ListaUl items={props.Lista1} />
      <ListaUl items={props.Lista2} />


      <ListaLi items={props.Lista4} />
      <ListaLi items={props.Lista5} />
  
      </div>


    </div>

    </div>
  )
}

export default Seccion