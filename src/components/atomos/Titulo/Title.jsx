import React from 'react'
import style from"./Title.module.css"

function Title(props) {
  return (

    <h2 className={style.Titulo}>
        {props.titulo}
    </h2>

  )
}

export default Title