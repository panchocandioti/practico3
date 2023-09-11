import React, { useState } from 'react'
import rock from "../multimedia/rock.jpg"
import paper from "../multimedia/paper.jpg"
import scissors from "../multimedia/scissors.jpg"
import ResultadoRonda from './ResultadoRonda';


function SeleccionarJugada(props) {

    const piedra = "piedra";
    const papel = "papel";
    const tijeras = "tijeras";
    const nombre = props.nombre;

    const [jugadaUsuario, setJugadaUsuario] = useState('');
    const [jugadaCompu, setJugadaCompu] = useState('');
    
    const clickPiedra = () => {
        resetearJugadas();
        setJugadaUsuario(piedra);
        generarJugadaCompu();
    };

    const clickPapel = () => {
        resetearJugadas();
        setJugadaUsuario(papel);
        generarJugadaCompu();
    };

    const clickTijeras = () => {
        resetearJugadas();
        setJugadaUsuario(tijeras);
        generarJugadaCompu();
    };

    const generarJugadaCompu = () => {
        let listaJugadas = [piedra, papel, tijeras];
        let jugadaNumeroCompu = Math.floor(Math.random() * 3);
        setJugadaCompu(listaJugadas[jugadaNumeroCompu]);
    }

    const resetearJugadas = () => {
        setJugadaUsuario('');
        setJugadaCompu('');
    }

    return (
        <div>
            <div>
                <img id="piedra" src={rock} alt="Piedra" onClick={clickPiedra}></img>
                <img id="papel" src={paper} alt="Papel" onClick={clickPapel}></img>
                <img id="tijeras" src={scissors} alt="Tijeras" onClick={clickTijeras}></img>
            </div>
            <div>
                <ResultadoRonda jugadaUsuario={jugadaUsuario} jugadaCompu={jugadaCompu} nombre={nombre} />
            </div>
        </div>
    )
}

export default SeleccionarJugada