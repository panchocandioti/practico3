import React from 'react';
import BotonReset from './BotonReset'

function ResultadoPartido(props) {

  return (
    <div id="mensajeFinalPartido">
    <p>RESULTADO DEL PARTIDO:</p>
    <p>{props.nombre}: {props.puntosUsuario} | COMPU: {props.puntosCompu}</p>
    <p>{props.vencedor}</p>
    <BotonReset/>
    </div>
  )
}

export default ResultadoPartido