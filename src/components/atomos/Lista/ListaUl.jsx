import React from 'react'
import style from"./ListaUl.module.css"

function ListaUl(props) {

    const items = props.items; // Recibe un array de elementos como props

    const listaItems = items.map((item, index) => (
      <li key={index}>{item}</li>
    ));

  return (

    <div className={style.DivLista}>
  <ul className={style.ListaUl}>
    {listaItems}
  </ul>
    </div>
  
  )
}

export default ListaUl