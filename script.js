// Datos del juego
let cuestion = [];
let correcta = [];
let opcions = [];
let subcompetenciaSeleccionada = '';

// Variables de juego
let posActual = 0;
let cantidadAcertadas = 0;


function regresarASubcompetencias() {
    document.getElementById("descripcion").style.display = 'none';
    document.getElementById("subcompetencias").style.display = 'block';
}

function mostrarSubcompetencias() {
    document.getElementById("pantallaInitial").style.display = 'none';
    document.getElementById("subcompetencias").style.display = 'block';
}

function pantallaInitial() {
    document.getElementById("pantallaInitial").style.display = 'block';
    document.getElementById("subcompetencias").style.display = 'none';
}

function mostrarDescripcion(subcompetencia) {
    subcompetenciaSeleccionada = subcompetencia;
    document.getElementById("subcompetencias").style.display = 'none';
    document.getElementById("descripcion").style.display = 'block';
    // Define aquí las descripciones para cada subcompetencia
    const descripciones = {
        'Subcompetencia 1': 'Esta es la descripción de la Subcompetencia 1. Aquí puedes agregar información sobre lo que los jugadores aprenderán en esta subcompetencia.',
        'Subcompetencia 2': 'Esta es la descripción de la Subcompetencia 2. Agrega detalles sobre el contenido relacionado con esta subcompetencia.',
        'Subcompetencia 3': 'Descripción de la Subcompetencia 3. Puedes proporcionar información relevante sobre esta subcompetencia.',
        // Agrega descripciones para otras subcompetencias
    };
    document.getElementById("descripcionTexto").textContent = descripciones[subcompetencia];
}

// Variables para la cuenta regresiva
function iniciarCuentaRegresiva() {
    // Ocultar la pantalla de Descripción
    document.getElementById("descripcion").style.display = 'none';

    // Mostrar la pantalla de Countdown
    const countdownElement = document.getElementById("countdown");
    countdownElement.style.display = 'block';

    // Iniciar la cuenta regresiva
    let countdownValue = 3; // Valor inicial de la cuenta regresiva
    countdownElement.textContent = countdownValue;

    const countdownInterval = setInterval(function() {
        countdownValue--;

        if (countdownValue === 0) {
            // Cuando la cuenta regresiva llega a cero, detenemos el intervalo
            clearInterval(countdownInterval);

            // Ocultar la pantalla de Countdown
            countdownElement.style.display = 'none';

            // Comenzar el juego
            comenzarGame(subcompetenciaSeleccionada);
        } else {
            // Actualizar el texto del contador
            countdownElement.textContent = countdownValue;
        }
    }, 1000); // Actualizar cada 1 segundo (1000 milisegundos)
}





function comenzarGame(subcompetencia) {
    subcompetenciaSeleccionada = subcompetencia;
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("descripcion").style.display = 'none';
    document.getElementById("pantallaGame").style.display = 'block';
    cargarPreguntasYOpciones();
}

function cargarPreguntasYOpciones() {
    // Aquí debes cargar las preguntas y opciones según la subcompetenciaSeleccionada
    // Puedes usar un switch o un objeto con las preguntas y opciones por subcompetencia
    // Por ejemplo:
    switch (subcompetenciaSeleccionada) {
        case 'Subcompetencia 1':
            // Cargar preguntas y opciones para Subcompetencia 1
            cuestion = ['How do you say?Banana', 'How do you say?Uva'];
            correcta = [1, 2];
            opcions = [['Naranja', 'Banana', 'Uva'], ['Naranja', 'Banana', 'Uva']];
            cargarCuestion(); // Para cargar la primera pregunta
            break;
        case 'Subcompetencia 2':
            // Cargar preguntas y opciones para Subcompetencia 2
            cuestion = ['How do you say?Uva', 'How do you say?Naranja'];
            correcta = [2, 0];
            opcions = [['Naranja', 'Banana', 'Uva'], ['Naranja', 'Banana', 'Uva']];
            cargarCuestion(); // Para cargar la primera pregunta
            break;
        case 'Subcompetencia 3':
            // Cargar preguntas y opciones para Subcompetencia 3
            cuestion = ['How do you say?Naranja', 'How do you say?Banana'];
            correcta = [0, 1];
            opcions = [['Naranja', 'Banana', 'Uva'], ['Naranja', 'Banana', 'Uva']];
            cargarCuestion(); // Para cargar la primera pregunta
            break;
        // Agrega más casos para otras subcompetencias
    }
}

function cargarCuestion() {
    if (cuestion.length <= posActual) {
        terminarGame();
    } else {
        limpiarOpcions();
        document.getElementById("textoPantallaGame").innerHTML = cuestion[posActual];

        for (let i = 0; i < opcions[posActual].length; i++) {
            document.getElementById("n" + i).innerHTML = opcions[posActual][i];
        }
    }
}

function limpiarOpcions() {
    for (let i = 0; i < 3; i++) {
        document.getElementById("n" + i).className = "nombre";
        document.getElementById("l" + i).className = "letra";
    }
}

function comprobarRespuesta(opElegida) {
    if (opElegida == correcta[posActual]) {
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    } else {
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarCuestion, 1000);
}

function terminarGame() {
    document.getElementById("pantallaGame").style.display = "none";
    document.getElementById("pantallaEnd").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = cuestion.length - cantidadAcertadas;
}

function volverInicio() {
    document.getElementById("pantallaEnd").style.display = "none";
    document.getElementById("subcompetencias").style.display = "block";
    document.getElementById("pantallaGame").style.display = "none";
}
