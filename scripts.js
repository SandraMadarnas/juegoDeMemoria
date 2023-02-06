let imagenes = [];
let selecciones = [];

generarTablero();

function cargarImagenes() {
    imagenes = [
        '<img class="front-face" src="/img/perrito.png" alt="perrito">',
        '<img class="front-face" src="/img/conejo.png" alt="conejo">',
        '<img class="front-face" src="/img/patito.png" alt="patito">',
        '<img class="front-face" src="/img/mono.png" alt="mono">',
        '<img class="front-face" src="/img/tortuga.png" alt="tortuga">',
        '<img class="front-face" src="/img/castor.png" alt="castor">',
    ]
}

function generarTablero() {
    cargarImagenes();
    let tablero = document.getElementById("tablero");
    let tarjetas = [];
    for (let i = 0; i < 12; i++) {
        tarjetas.push(`<div class="memory-card" id="tarjeta${i}">
                                ${imagenes[0]}
                            
                                <img class="back-face" src="/img/gatito.png" alt="Memory Card">
                            
                        </div>`);
        if (i % 2 == 1) {
            imagenes.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 1);
    tablero.innerHTML = tarjetas.join(" ");
}