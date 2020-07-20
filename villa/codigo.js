var villa = document.getElementById("villa");
var papel = villa.getContext("2d");
var mapa = "tile.png";

var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujar);

var vaca = new Image();
vaca.src = "vaca.png";

var pollo = new Image();
pollo.src = "pollo.png";

var cerdo = new Image();
cerdo.src = "cerdo.png";

function dibujar(){
    papel.drawImage(fondo,0,0);
}

function aleatorio(min, max){
    var resultado;
    resultado = Math.floor(Math.random() * ( max - min + 1 ) + min );
    return resultado;
}