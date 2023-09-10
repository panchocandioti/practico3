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
            <button onClick={handleBotonClick}>JUGAR</button>
            </div>}
        </div>
    )
}

export default Saludo;