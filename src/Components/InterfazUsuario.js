import React, { useState } from 'react';
import Saludo from './Saludo';
import BotonReset from './BotonReset';

function FormularioNombre() {
    const [nombre, setNombre] = useState('');
    const [nuevoNombre, setNuevoNombre] = useState('');
    const [mostrarFormulario, setMostrarFormulario] = useState(true);

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

    return (
        <div>
            {mostrarFormulario ? (<div>
            <h3>Jugá contra la computadora</h3>
            <h3>El vencedor será el primero en ganar 3 rondas</h3>
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
                    <BotonReset/>
                </form>
            </div>
            </div>) : (
                    <Saludo nombre={nombre}/>)}
        </div>
    );
}

export default FormularioNombre;