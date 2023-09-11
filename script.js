//orden del arreglo por cada cuestionario
let cuestion = ['How do you say? Banana'];

//arreglo que guardara la opcion correcta
let correcta = [1];

//arreglo que guardara las respuestas de cada jugada
let opcions = [];

opcions.push (['Naranja','Banana','Uva']);

//variable que guarda la position actual
let posActual = 0;

//variable que guarda cantidad acertadas hasta el momento
let cantidadAcertadas = 0;

function comenzarGame(){
    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activamos pantallas necesarias
    document.getElementById("pantallaInitial").style.display = 'none';
    document.getElementById("pantallaGame").style.display = 'block';
    cargarCuestion();
}

//funcion que carga las siguientes preguntas y opciones
function cargarCuestion(){
    //control si se acabaron las preguntas
    if(cuestion.length <= posActual){
        terminarGame();
    }
    else{//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpcions();
        document.getElementById("").scr = "" + cuestion[posActual];
        document.getElementById("n0").innerHTML = opcions[posActual][0];
        document.getElementById("n1").innerHTML = opcions[posActual][1];
        document.getElementById("n2").innerHTML = opcions[posActual][2];
    }
}

function limpiarOpcions(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acerto
        //agregamos las clases para colocar el color verde de la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{//no acerto
        //agregamos las clases para colocar en rojo la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //esperamos un segundo y pasamos con la siguiente pregunta y opciones
    setTimeout(cargarCuestion,1000);

}
function terminarGame(){
    //ocultamos las pantallas y mostramos la pantalla final 
    document.getElementById("pantallaGame").style.display = "none";
    document.getElementById("pantallaEnd").style.display = "block";
    //agregamos los resultados 
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = cuestion.length - cantidadAcertadas;
}

function volverInicio(){
    //ocultamos las pantallas y activamos la inicial 
    document.getElementById("pantallaEnd").style.display = "none";
    document.getElementById("pantallaInitial").style.display = "block";
    document.getElementById("pantallaGame").style.display = "none";
}