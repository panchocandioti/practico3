import React from 'react';

function Saludo(props) {

    return (
        <div>
            <div><h2>¡HOLA, {props.nombre}!</h2>
            <h3>Vas a jugar contra la computadora</h3>
            <h3>¿Te acordás de las reglas?</h3>
            <h5>La piedra es demasiado dura para las tijeras</h5>
            <h5>Las tijeras cortan el papel</h5>
            <h5>El papel envuelve a la piedra</h5>
            <h3>El vencedor del juego será el primero en ganar 3 rondas</h3>
            </div>
        </div>
    )
}

export default Saludo;