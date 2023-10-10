import React from 'react'
import style from "./ListaLi.module.css"

function ListaLi(props) {
    const items = props.items; // Recibe un array de elementos como props

    const listaItems = items.map((item, index) => (
      <li key={index}>{item}</li>
    ));
  return (
    <div className={style.DivLista2}>
    <ol className={style.ListaLi}>
      {listaItems}
    </ol>
      </div>
    
  )
}

export default ListaLi