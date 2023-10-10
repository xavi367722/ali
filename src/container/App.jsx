import React from 'react'
import Seccion from '../components/Organismo/Seccion'
import img from "../img/ceviche.jpg"
import img2 from "../img/hot_cakes_.jpg"
import img3 from "../img/pizza.jpg"
import Nav from '../components/Organismo/Nav/Nav'

function App() {
  const Vacio = [
   
  ];
  const ingredientes = [
    "1 taza de harina",
    "1 huevo",
    "1 taza de leche",
    "1 cucharada de aceite vegetal",
    "1/2 cucharadita de sal"
  ];
  const preparacion = [
    "En un tazón grande, mezcla la harina, el huevo, la leche, el aceite vegetal y la sal.",
    "Bate bien hasta que la mezcla esté suave y no queden grumos.",
    "Calienta una sartén antiadherente a fuego medio."
  ];
  const preparacion2 = [
    "Vierte una pequeña cantidad de masa en la sartén para formar un panqueque.",
    "Cocina durante 2-3 minutos por cada lado, o hasta que estén dorados.",
    "Repite con el resto de la masa."
  ];
  
  
  
  
  

const cevichePreparacion = [
    "Corta el pescado en cubos de aproximadamente 2 centímetros",
    "Exprime los limones para obtener su jugo",
    "Coloca el pescado en un recipiente y viértele el jugo de limón",
    "Agrega la cebolla, el cilantro, el ají amarillo y el ají limo",
    "Sazona con sal y pimienta al gusto",
    "Refrigera durante al menos 30 minutos, o hasta que el pescado se haya cocido con el ácido del limón",
    "Sirve la comida"
  ];

  const ingredientesMasa = [
    "500 gramos de harina de fuerza",
    "250 mililitros de agua tibia",
    "10 gramos de levadura fresca",
    "1 cucharada de azúcar",
    "1 cucharadita de sal"
  ];
  const ingredientesSalsa = [
    "500 gramos de tomates pelados y sin semillas",
    "1 cebolla mediana, picada",
    "2 dientes de ajo, picados",
    "1 cucharadita de orégano seco",
    "1/2 cucharadita de sal",
    "1/4 cucharadita de pimienta negra"
  ];
  const preparacionPizza = [
    "Prepara la masa: Mezcla los ingredientes secos, disuelve la levadura en el agua tibia y agrega todo a la masa. Amasa durante 10-15 minutos. Deja que la masa leve durante 1 hora.",
    "Prepara la salsa de tomate: Sofríe la cebolla y el ajo, agrega los tomates pelados, el orégano, la albahaca, la sal y la pimienta. Cocina durante 20-30 minutos.",
    "Prepara la pizza: Divide la masa en dos partes, estira cada una y coloca en una bandeja engrasada. Vierte la salsa de tomate, agrega el queso mozzarella y los demás ingredientes al gusto.",
    "Hornea la pizza: Hornea durante 15-20 minutos."
  ];
  

  return (

    <div>
<Nav/>

<Seccion 
    imagenReceta={img}
    tituloReceta="Ceviche"
    Lista1={cevichePreparacion}
    Lista2={Vacio}
    Lista3={Vacio}
    Lista4={Vacio}
    Lista5={cevichePreparacion}
    Lista6={Vacio}
    color="black"
    colorfondo="rgb(209, 203, 203)"
    />    
    
    <Seccion 
    imagenReceta={img2}
    tituloReceta="Ceviche"
    Lista1={ingredientes}
    Lista2={Vacio}
    Lista3={Vacio}
    Lista4={preparacion}
    Lista5={preparacion2}
    Lista6={Vacio}
    color="white"
    colorfondo="black"
    orientacion="row-reverse"
    />    
   
    <Seccion 
    imagenReceta={img3}
    tituloReceta="Ceviche"
    Lista1={ingredientesMasa}
    Lista2={ingredientesSalsa}
    Lista3={Vacio}
    Lista4={Vacio}
    Lista5={preparacionPizza}
    Lista6={Vacio}
    color="black"
    colorfondo="rgb(209, 203, 203)"
    />
    </div>
    
    

    )
}

export default App