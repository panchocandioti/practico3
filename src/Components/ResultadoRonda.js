import React, { useState, useEffect } from 'react'
import ResultadoPartido from './ResultadoPartido';

function ResultadoRonda(props) {

    const piedra = "piedra";
    const papel = "papel";
    const tijeras = "tijeras";
    const nombre = props.nombre;

    const [resultadoRonda, setResultadoRonda] = useState('');
    const [puntosUsuario, setPuntosUsuario] = useState(0);
    const [puntosCompu, setPuntosCompu] = useState(0);
    const [mostrarFinal, setMostrarFinal] = useState(false);
    const [vencedor, setVencedor] = useState('');

    useEffect(() => {
        determinarResultado();
    }, [props.jugadaCompu, props.jugadaUsuario, props.forceRender]);

    useEffect(() => {
        determinarGanador();
    }, [puntosCompu, puntosUsuario]);


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
        if (puntosUsuario > 2 || puntosCompu > 2) {
            setMostrarFinal(true);
        }
        if (puntosUsuario > puntosCompu) {
            setVencedor("¡GANASTE, " + props.nombre + "! ¡FELICITACIONES!")
        } else { setVencedor("LO SIENTO, " + props.nombre + ", GANÓ LA COMPU...") };
    }

    return (
        <div>
            <div>
                <div id="jugadas">
                    <p>{props.nombre}: {props.jugadaUsuario}</p>
                    <p>COMPU: {props.jugadaCompu}</p>
                </div>
                <div id="resultadoRonda">
                    <p>{resultadoRonda}</p>
                </div>
                <div id="tanteador">
                    <p>{props.nombre}: {puntosUsuario}</p>
                    <p>COMPU: {puntosCompu}</p>
                </div>
            </div>
            {mostrarFinal && (<div>
                <ResultadoPartido puntosCompu={puntosCompu} puntosUsuario={puntosUsuario}
                    vencedor={vencedor} mostrarFinal={mostrarFinal} nombre={nombre}
                />
            </div>)}
        </div>
    )
}

export default ResultadoRonda