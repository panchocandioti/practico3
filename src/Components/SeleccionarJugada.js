import React, { useState } from 'react'
import rock from "../multimedia/rock.jpg"
import paper from "../multimedia/paper.jpg"
import scissors from "../multimedia/scissors.jpg"
import ResultadoRonda from './ResultadoRonda';

// Este componente muestra las imágenes de las tres opciones para hacer click.
// A partir de cada click genera las jugadas de usuario y computadora,
// llamando a ResultadoRonda.js en donde se determinará el resultado de cada ronda y
// se le sumará puntaje al ganador. Para esto se le envían como props la jugada del
// usuario, la jugada de la computadora, el nombre y una variable forceRender para
// evitar jugadas en falso cuando se repiten resultados idénticos de ronda.

function SeleccionarJugada(props) {

    const piedra = "piedra";
    const papel = "papel";
    const tijeras = "tijeras";
    const nombre = props.nombre;

    const [jugadaUsuario, setJugadaUsuario] = useState('');
    const [jugadaCompu, setJugadaCompu] = useState('');
    const [mostrarJuego, setMostrarJuego] = useState(false);
    const [forceRender, setForceRender] = useState(false);
    
    const clickPiedra = () => {
        resetearJugadas();
        jugadas(piedra);
    };

    const clickPapel = () => {
        resetearJugadas();
        jugadas(papel);
    };

    const clickTijeras = () => {
        resetearJugadas();
        jugadas(tijeras);
    };

    const generarJugadaCompu = () => {
        let listaJugadas = [piedra, papel, tijeras];
        let jugadaNumeroCompu = Math.floor(Math.random() * 3);
        setJugadaCompu((prevState) => listaJugadas[jugadaNumeroCompu]);
    }

    const resetearJugadas = () => {
        setMostrarJuego(true);
        setJugadaUsuario((prevState) => '');
        setJugadaCompu((prevState) => '');
    }

    const jugadas = (eleccion) => {
        setForceRender((prev) => !prev);
        setJugadaUsuario((prevState) => eleccion);
        generarJugadaCompu();
    }

    return (
        <div>
            <div className='imagenes'>
                <img id="piedra" src={rock} alt="Piedra" onClick={clickPiedra}></img>
                <img id="papel" src={paper} alt="Papel" onClick={clickPapel}></img>
                <img id="tijeras" src={scissors} alt="Tijeras" onClick={clickTijeras}></img>
            </div>
            {mostrarJuego && (<div>
                <ResultadoRonda jugadaUsuario={jugadaUsuario} jugadaCompu={jugadaCompu} nombre={nombre} forceRender = {forceRender}/>
            </div>)}
        </div>
    )
}

export default SeleccionarJugada