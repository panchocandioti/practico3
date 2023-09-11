import React, { useState, useEffect } from 'react'
import ResultadoPartido from './ResultadoPartido';

function ResultadoRonda(props) {

    const piedra = "piedra";
    const papel = "papel";
    const tijeras = "tijeras";

    const [resultadoRonda, setResultadoRonda] = useState('');
    const [puntosUsuario, setPuntosUsuario] = useState(0);
    const [puntosCompu, setPuntosCompu] = useState(0);
    const [mostrarJuego, setMostrarJuego] = useState(true);
    const [mostrarFinal, setMostrarFinal] = useState(false);
    const [vencedor, setVencedor] = useState('');

    useEffect(() => {
        determinarResultado();
        determinarGanador();
    }, [props.jugadaCompu, props.jugadaUsuario]);

    const sumaCompu = () => {
        setPuntosCompu(puntosCompu + 1);
    }

    const sumaUsuario = () => {
        setPuntosUsuario(puntosUsuario + 1);
    }

    const determinarResultado = () => {
        if (props.jugadaCompu === props.jugadaUsuario) {
            setResultadoRonda("Empate");
        } else if (props.jugadaCompu === piedra && props.jugadaUsuario === papel) {
            setResultadoRonda("Gana " + props.nombre);
            sumaUsuario();
        } else if (props.jugadaCompu === piedra && props.jugadaUsuario === tijeras) {
            setResultadoRonda("Gana la compu");
            sumaCompu();
        } else if (props.jugadaCompu === papel && props.jugadaUsuario === piedra) {
            setResultadoRonda("Gana la compu");
            sumaCompu();
        } else if (props.jugadaCompu === papel && props.jugadaUsuario === tijeras) {
            setResultadoRonda("Gana " + props.nombre);
            sumaUsuario();
        } else if (props.jugadaCompu === tijeras && props.jugadaUsuario === piedra) {
            setResultadoRonda("Gana " + props.nombre);
            sumaUsuario();
        } else if (props.jugadaCompu === tijeras && props.jugadaUsuario === papel) {
            setResultadoRonda("Gana la compu");
            sumaCompu();
        }
    }

    const determinarGanador = () => {
        if (puntosUsuario >= 3 || puntosCompu >= 3) {
            setMostrarJuego(false);
            setMostrarFinal(true);
        }
        if (puntosUsuario > puntosCompu) {
            setVencedor(props.nombre)
        } else {setVencedor("COMPU")};
    }

    return (
        <div>
            {mostrarJuego && (<div>
                <p>{props.nombre}: {props.jugadaUsuario}</p>
                <p>COMPU: {props.jugadaCompu}</p>
                <p>{resultadoRonda}</p>
                <p>{props.nombre}: {puntosUsuario}</p>
                <p>COMPU: {puntosCompu}</p>
            </div>)}
            {mostrarFinal && (<div>
                <p>{vencedor}</p>
                <ResultadoPartido puntosCompu = {puntosCompu} puntosUsuario = {puntosUsuario}
                    vencedor = {vencedor}
                />
            </div>)}
        </div>
    )
}

export default ResultadoRonda