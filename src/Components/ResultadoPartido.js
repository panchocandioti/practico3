import React from 'react';
import BotonReset from './BotonReset'

function ResultadoPartido(props) {

  return (
    <div id="mensajeFinalPartido">
    <p>{props.vencedor}</p>
    <BotonReset/>
    </div>
  )
}

export default ResultadoPartido