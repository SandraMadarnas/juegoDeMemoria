// const timer = document.querySelector('#timer');
// const cards = document.querySelectorAll('.card');

const score = document.querySelector('#score');
let time = 0;
let timerId;

let imagenes = [];
let selecciones = [];
let scoreTime = 0;
let timerWorking = true;

// const startBtn = document.querySelector('#startBtn');
// startBtn.addEventListener('click', generarTablero);
document.querySelector("#start-btn").onclick = generarTablero;


// CARGAR IMÁGENES
function cargarImagenes() {
    imagenes = [
        '<img src="/img/ardilla.png" width="100%">',
        '<img src="/img/castor.png" width="80%">',
        '<img src="/img/conejo.png" width="100%">',
        '<img src="/img/gatito.png" width="100%">',
        '<img src="/img/mono.png" width="100%">',
        '<img src="/img/patito.png" width="80%">',
        '<img src="/img/perrito.png" width="100%">',
        '<img src="/img/tortuga.png" width="80%">',
    ]
}

// GENERAR TABLERO
function generarTablero() {
    cargarImagenes();
    let len = imagenes.length;
    selecciones = [];
    let tablero = document.getElementById("tablero");
    let tarjetas = [];

    for (let i = 0; i < len * 2; i++) {
        tarjetas.push(`
                <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${imagenes[0]}
                        </div>
                        <div class="cara superior">
                        <img src="/img/interrogacion.png" width="80%">
                        </div>
                    </div>
                </div>        
                `)
        if (i % 2 == 1) {
            imagenes.splice(0, 1);
        }
    }
    tarjetas.sort(() => Math.random() - 0.5);
    tablero.innerHTML = tarjetas.join(" ");
    timerReset();
}

// DAR VUELTA A LAS TARJETAS, SI HACEN MACTH SE QUEDAN DE CARA, SI NO SE DAN LA VUELTA
function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i);
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)";
        selecciones.push(i);
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones);
        selecciones = [];
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0]);
        let trasera2 = document.getElementById("trasera" + selecciones[1]);
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0]);
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1]);
            tarjeta1.style.transform = "rotateY(0deg)";
            tarjeta2.style.transform = "rotateY(0deg)";
        } else {
            trasera1.style.background = "black";
            trasera2.style.background = "black";
        }
    }, 1000);
}


// TIEMPO
function timer() {
    document.getElementById("scoreTime").innerHTML = scoreTime;
    scoreTime++;
}

setInterval(() => {
    if (timerWorking) { timer() }
}, 1000)

function timerReset() {
    scoreTime = 0;
}


// PUNTOS
function updateScore(match) {
    // Estoy llamando a una variable que esta dentro de una funcion
    if (trasera1.innerHTML != trasera2.innerHTML) {
        score++;
    } else {
        score--;
    }
    document.getElementById("score").innerHTML = "Score: " + score;
}

// Example usage:
// updateScore(true);  // increases the score by 1


let cardsLeft = 8;

function updateScore(match) {
    if (match) {
        cardsLeft--;
        if (cardsLeft === 0) {
            alert("¡Felicidades! Has completado el juego de memoria.");
        }
    }
}



// MENSAJE DE JUEGO TERMINADO
// let juegoFinalizado = window.confirm('🎉 ¡Has terminado el juego!');