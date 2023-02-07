let imagenes = [];
let selecciones = [];
let scoreTime = 0;
let timerWorking = true;

document.querySelector("#start-btn").onclick = generarTablero;


function cargarImagenes() {
    imagenes = [
        '<img src="/img/ardilla.png" width="80%">',
        '<img src="/img/castor.png" width="80%">',
        '<img src="/img/conejo.png" width="80%">',
        '<img src="/img/gatito.png" width="80%">',
        '<img src="/img/mono.png" width="80%">',
        '<img src="/img/patito.png" width="80%">',
        '<img src="/img/perrito.png" width="80%">',
        '<img src="/img/tortuga.png" width="80%">',
    ]
}

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

// TIMER
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