import React from 'react';
import BotonReset from './BotonReset'

// Este componente muestra el resultado del partido en forma de "pop up" manejado
// de modo simple, manipulando los estilos del div "mensajeFinalPartido".
// Se vuelve a mostrar el botón de RESET para poder volver a comenzar

function ResultadoPartido(props) {

  return (
    <div id="mensajeFinalPartido">
    <p>RESULTADO DEL PARTIDO:</p>
    <p>{props.nombre}: {props.puntosUsuario}</p>
    <p>COMPU: {props.puntosCompu}</p>
    <p>{props.vencedor}</p>
    <BotonReset/>
    </div>
  )
}

export default ResultadoPartido