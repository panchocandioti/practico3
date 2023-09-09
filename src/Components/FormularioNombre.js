import React, { useState } from 'react';

function FormularioNombre() {
    const [nombre, setNombre] = useState('');
    const [nuevoNombre, setNuevoNombre] = useState('');

    const manejarCambioInput = (event) => {
        setNuevoNombre(event.target.value);
    };

    const manejarEnvio = (event) => {
        event.preventDefault();

        let formatoNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        let validacion = true;

        if (!formatoNombre.test(nuevoNombre)) {
            alert("Por favor, ingresá un nombre");
            validacion = false;
        };

        if (validacion) {
            setNombre(nuevoNombre.toUpperCase());
        };
    };


    return (
        <div>
            <h3>Jugá contra la computadora</h3>
            <h3>El vencedor será el primero en ganar 3 rondas</h3>
            <div className="formulario">
                <form className="formulario" onSubmit={manejarEnvio}>
                    <label>
                        Ingresa tu nombre para jugar:
                    </label>
                    <input
                        type="text"
                        value={nuevoNombre}
                        onChange={manejarCambioInput}
                    />
                    <button type="submit">JUGAR</button>
                </form>
                {nombre && <p>HOLA, {nombre}!</p>}
            </div>
        </div>
    );

}

export default FormularioNombre;