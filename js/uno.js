var btn_piedra = document.getElementById("Piedra"); 
var btn_papel = document.getElementById("Papel"); 
var btn_tijeras = document.getElementById("Tijera"); 
var imgUsuario = document.getElementById("usuario"); 
var imgCpu = document.getElementById("cpu"); 
var btn_play = document.getElementById("Iniciar_juego");
var marcador_usuario = document.getElementById("puntos_usuario").innerText;
var marcador_cpu = document.getElementById("puntos_cpu").innerText;



var Opcion_jugador;
var Opcion_cpu;


// poner las imagenes en los botones
function init_imagenes() {
    btn_piedra.style.backgroundImage = " url('../img/Piedra.png')";
    btn_papel.style.backgroundImage = " url('../img/Papel.png')";
    btn_tijeras.style.backgroundImage = "url('../img/Tijeras.png')";
}
init_imagenes();

// cambiar la imagen usuario con los botones
btn_piedra.onclick = function()
{
    Opcion_jugador = 0;
    imgUsuario.src = '../img/Piedra.png';
}
btn_papel.onclick = function(){
    Opcion_jugador = 1;
    imgUsuario.src = '../img/Papel.png';
}
btn_tijeras.onclick = function(){
    Opcion_jugador = 2;
    imgUsuario.src='../img/Tijeras.png';
}
// crear un numero aleatorio

function numeroAleatorio(){
    return parseInt(Math.random() * 3);


}
 

// cambiando imagen de CPU
function imagen_cpu(opcion) {
    if (opcion === 0) {
        imgCpu.src = "../img/Piedra.png";
    } else if (opcion === 1) {
        imgCpu.src = "../img/Papel.png";
    } else {
        imgCpu.src = "../img/Tijeras.png";
    }
}

// asignando respuesta de cpu
btn_play.onclick = function(){
    Opcion_cpu = numeroAleatorio();
    imagen_cpu(Opcion_cpu);
    juego(Opcion_jugador, Opcion_cpu)
}



// JUEGO 
function juego(Opcion_jugador, Opcion_cpu){
    var caso1;
    var caso2;
    var caso3;
    var empate;
    if(Opcion_jugador === Opcion_cpu){
        empate = true;
    }else if(Opcion_jugador === 0 && Opcion_cpu === 2){
        caso1 = true;
    }else if(Opcion_jugador === 1 && Opcion_cpu === 0){
        caso2 = true;
    }else if(Opcion_jugador === 2 && Opcion_cpu === 1){
        caso3 = true;
    }

    if(caso1 || caso2 || caso3){
        alert("Usuario Gano")
        marcador_usuario++;
        document.getElementById("puntos_usuario").innerText=marcador_usuario;
    }else if(empate){
        alert("Empate");
    }
    else{
        alert("CPU Gano")
        marcador_cpu++;
        document.getElementById("puntos_cpu").innerText=marcador_cpu; 

    }
    
}