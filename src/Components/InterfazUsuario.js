import React from 'react'
import './InterfazUsuario.css';
import './ResultadoRonda';
import './MarcadorParcial';
import './ResultadoPartido';

function InterfazUsuario() {
  return (
    <div id="mensajes" className="mensajes">
        <p id="mensaje1">Jugá contra la computadora</p>
        <p id="mensaje2">El vencedor será el primero en ganar 3 rondas</p>
    </div>
  )
}

export default InterfazUsuario;