import React, { useState } from 'react';
import Saludo from './Saludo';
import BotonReset from './BotonReset';
import SeleccionarJugada from './SeleccionarJugada';

function InterfazUsuario() {
    const [nombre, setNombre] = useState('');
    const [nuevoNombre, setNuevoNombre] = useState('');
    const [mostrarFormulario, setMostrarFormulario] = useState(true);
    const [mostrarSaludo, setMostrarSaludo] = useState(true);
    const [mostrarJuego, setMostrarJuego] = useState(false);

    const manejarCambioInput = (event) => {
        setNuevoNombre(event.target.value);
    };

    const manejarEnvio = (event) => {
        event.preventDefault();
        setNuevoNombre('');

        let formatoNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?:\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
        let validacion = true;

        if (!formatoNombre.test(nuevoNombre)) {
            alert("Por favor, ingresá un nombre");
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
                            Ingresa tu nombre para comenzar:
                        </label>
                        <input
                            type="text"
                            value={nuevoNombre}
                            onChange={manejarCambioInput}
                        />
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