import React, { useState, useEffect } from 'react'
import ResultadoPartido from './ResultadoPartido';

// Este componente determina el resultado de cada ronda y le suma puntaje al ganador.
// Muestra la jugada de cada uno, el resultado de la ronda y el tanteador parcial.
// Cuando alguno de los jugadores llega a tres rondas ganadas llama a ResultadoPartido.js
// donde se mostrará el resultado final y un mensaje según gane el usuario o la computadora.
// Para esto se le envían como props los puntos de cada jugador, el nombre del usuario,
// y el jugador vencedor.


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
                    vencedor={vencedor} nombre={nombre}
                />
            </div>)}
        </div>
    )
}

export default ResultadoRonda