import React, {useState} from 'react';

function Saludo(props) {

    const [mostrarSaludo, setMostrarSaludo] = useState(true);

    const handleBotonClick = () => {
               setMostrarSaludo(false);
      };


    return (
        <div>
            {mostrarSaludo &&
            <div><h2>¡HOLA, {props.nombre}! ¿VAMOS A JUGAR?</h2>
            <h3>Vas a jugar contra la computadora</h3>
            <h4>¿Te acordás de las reglas?</h4>
            <h5>La piedra es demasiado dura para las tijeras</h5>
            <h5>Las tijeras cortan el papel</h5>
            <h5>El papel envuelve a la piedra</h5>
            <h4>El vencedor del juego será el primero en ganar 3 rondas</h4>
            <button onClick={handleBotonClick}>JUGAR</button>
            </div>}
        </div>
    )
}

export default Saludo;