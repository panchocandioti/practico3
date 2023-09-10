import React, { useState, useEffect } from 'react'

function ResultadoRonda(props) {

    const piedra = "piedra";
    const papel = "papel";
    const tijeras = "tijeras";

    let resultadoRonda;

    if (props.jugadaCompu === props.jugadaUsuario) {
        resultadoRonda = "Empate";
    } else if (props.jugadaCompu === piedra && props.jugadaUsuario === papel) {
        resultadoRonda = "Gana " + props.nombre;
    } else if (props.jugadaCompu === piedra && props.jugadaUsuario === tijeras) {
        resultadoRonda = "Gana la compu";
    } else if (props.jugadaCompu === papel && props.jugadaUsuario === piedra) {
        resultadoRonda = "Gana la compu";
    } else if (props.jugadaCompu === papel && props.jugadaUsuario === tijeras) {
        resultadoRonda = "Gana " + props.nombre;
    } else if (props.jugadaCompu === tijeras && props.jugadaUsuario === piedra) {
        resultadoRonda = "Gana " + props.nombre;
    } else if (props.jugadaCompu === tijeras && props.jugadaUsuario === papel) {
        resultadoRonda = "Gana la compu";
    }

    const [puntosUsuario, setPuntosUsuario] = useState(0);
    const [puntosCompu, setPuntosCompu] = useState(0);

    useEffect(() => {
        if (resultadoRonda === "Gana la compu") {
            setPuntosCompu(puntosCompu + 1);
        } else if (resultadoRonda === "Gana " + props.nombre) {
            setPuntosUsuario(puntosUsuario + 1);
        }
    }, [resultadoRonda, props.nombre]);

    return (
        <div>
            <p>{props.nombre}: {props.jugadaUsuario}</p>
            <p>COMPU: {props.jugadaCompu}</p>
            <p>{resultadoRonda}</p>
            <p>{props.nombre}: {puntosUsuario}</p>
            <p>COMPU: {puntosCompu}</p>
        </div>
    )
}

export default ResultadoRonda