import React, { useState } from 'react';
import Saludo from './Saludo';
import BotonReset from './BotonReset';
import SeleccionarJugada from './SeleccionarJugada';

// El componente InterfazUsuario se utiliza para manejar el ingreso y validación del
// nombre del usuario. Una vez aceptado el nombre, llama a Saludo.js en donde se explica
// el juego. Se proporciona un botón JUGAR para finalmente llamar a SeleccionarJugada.js
// que es el componente que comienza el juego, recibiendo como props el nombre del usuario.

function InterfazUsuario() {
    const [nombre, setNombre] = useState('');
    const [nuevoNombre, setNuevoNombre] = useState('');
    const [mostrarFormulario, setMostrarFormulario] = useState(true);
    const [mostrarSaludo, setMostrarSaludo] = useState(true);
    const [mostrarJuego, setMostrarJuego] = useState(false);
    const [mostrarAlert, setMostrarAlert] = useState(false);

    const manejarCambioInput = (event) => {
        setNuevoNombre(event.target.value);
    };

    const manejarEnvio = (event) => {
        event.preventDefault();
        setNuevoNombre('');

        let formatoNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?:\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
        let validacion = true;

        if (!formatoNombre.test(nuevoNombre)) {
            setMostrarAlert(true);
            validacion = false;
        };

        if (validacion) {
            setNombre(nuevoNombre.toUpperCase());
            setMostrarFormulario(false);
        };
    };

    const botonJugarClick = () => {
        setMostrarSaludo(false);
        setMostrarJuego(true);
    };

    return (
        <div>
            {mostrarFormulario ? (<div>

                <div className="formulario">
                    <form className="formulario" onSubmit={manejarEnvio}>
                        <label>
                            Ingresá tu nombre para comenzar:
                        </label>
                        <input
                            type="text"
                            value={nuevoNombre}
                            onChange={manejarCambioInput}
                        />
                        {mostrarAlert && (<p>Por favor, ingresá un nombre</p>)}
                        <button type="submit">GUARDAR NOMBRE</button>
                        <BotonReset />
                    </form>
                </div>
            </div>) : (
                mostrarSaludo && (
                    <div>
                        <Saludo nombre={nombre} />
                        <button onClick={botonJugarClick}>JUGAR</button>
                    </div>)
            )}
            {mostrarJuego && (
                    <div>
                        <SeleccionarJugada nombre={nombre}/>
                    </div>)}
        </div>
    )
}

export default InterfazUsuario;