import React from "react";
import '../estilos/estilos.css';

function Boton({texto, esBotondeClic,manejarClic}){
    return(
        <button
        className={ esBotondeClic ? 'boton-click' : 'boton-reiniciar'}
        onClick={manejarClic}
        >
        {texto}
        </button>
    )
}

export default Boton;