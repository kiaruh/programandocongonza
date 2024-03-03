const participantes = [];

class Jugador {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.puntos = 0;
        this.grupo = null;
    }
}

// Crea un jugador con su nombre y apellido
const crearJugador = () => {
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido')
    const jugador = new Jugador(nombre.value, apellido.value);
    nombre.value = ''
    apellido.value = ''
    return jugador
}

// Agrega un participante al torneo
const sumarParticipante = () => {
    const jugador = crearJugador();
    if (!existeParticipante(jugador)) {
        participantes.push(jugador);
        alert("Participante agregado.");
    } else {
        alert("El participante ya se encuentra participando del torneo.");
    }}



// Muestra los participantes por consola
const mostrarParticipantes = () => {
    const contenedor = document.getElementById("lista_participantes");
    // Vaciar el contenido existente del contenedor
    contenedor.innerHTML = "";
    
    for (const participante of participantes) {
        let divParticipante = document.createElement("div");
        divParticipante.innerHTML = `
            <p>Nombre: ${participante.nombre}</p>
            <p>Apellido: ${participante.apellido}</p>
            <b>Puntos: ${participante.puntos}</b>
        `;
        contenedor.appendChild(divParticipante);
    }
}



// Verificar si un participante ya es parte del torneo
function existeParticipante(jugador) {
    let existe = false;
    participantes.forEach(function(participante) {
        if (participante.nombre === jugador.nombre && participante.apellido === jugador.apellido) {
            existe = true;
        }
    })
    return existe;
}


// Ingresar datos y puntos de 2 jugadores, indica quién ganó
function jugarPartido() {
    let jugador1, jugador2;
    do {
        jugador1 = crearJugador();
    } while (!existeParticipante(jugador1));
    const resultadoJugador1 = parseInt(prompt("Ingrese los puntos del primer jugador: "));

    do {
        jugador2 = crearJugador();
    } while (!existeParticipante(jugador2));
    const resultadoJugador2 = parseInt(prompt("Ingrese los puntos del segundo jugador: "));

    if (resultadoJugador1 > resultadoJugador2) {
        alert("Ganó " + jugador1.nombre + " " + jugador1.apellido);
    } else if (resultadoJugador1 < resultadoJugador2) {
        alert("Ganó " + jugador2.nombre + " " + jugador2.apellido);
    } else {
        alert("Es empate");
    }
   

    
    let btn_agregar_jugador = document.getElementsByClassName("boton_agregar_jugador")
    btn_agregar_jugador.addEventListener("click",sumarParticipante)

    let btn_mostrar_jugadores = document.getElementsByClassName("boton_mostrar_participantes")
    btn_mostrar_jugadores.addEventListener("click", mostrarParticipantes)

 
}


