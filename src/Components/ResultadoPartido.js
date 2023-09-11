import React, {useState} from 'react'
import BotonReset from './BotonReset'

function ResultadoPartido(props) {

  return (
    <div>
    <p>El vencedor es {props.vencedor}</p>
    <BotonReset/>
    </div>
  )
}

export default ResultadoPartido