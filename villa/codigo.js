var villa = document.getElementById("villa");
var papel = villa.getContext("2d");

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var fondo = {
    url: "tile.png",
    cargaOK: false
}

var vaca = {
    url: "vaca.png",
    cargaOK: false,
    cantidad: aleatorio(1, 10)
}

var pollo = {
    url: "pollo.png",
    cargaOK: false,
    cantidad: aleatorio(1, 10)
}

var cerdo = {
    url: "cerdo.png",
    cargaOK: false,
    cantidad: 1,
    x: aleatorio(0,7) * 80,
    y: aleatorio(0,7) * 80
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarFondo(){
    fondo.cargaOK = true;
    dibujar();
}

function cargarVaca(){
    vaca.cargaOK = true;
    dibujar();
}

function cargarPollo(){
    pollo.cargaOK = true;
    dibujar();
}

function cargarCerdo(){
    cerdo.cargaOK = true;
    dibujar();
}

function dibujar(){
    if(fondo.cargaOK){
        papel.drawImage(fondo.imagen,0,0);
    }
    if(vaca.cargaOK){
        for(var i=0; i<vaca.cantidad;i++){
            var x = aleatorio(0,7) * 60;
            var y = aleatorio(0,7) * 60;
            papel.drawImage(vaca.imagen,x,y);
        }
    }
    if(pollo.cargaOK){
        for(var i=0; i<pollo.cantidad;i++){
            var x = aleatorio(0,7) * 60;
            var y = aleatorio(0,7) * 60;
            papel.drawImage(pollo.imagen,x,y);
        }
    }
    if(cerdo.cargaOK){            
        papel.drawImage(cerdo.imagen,cerdo.x,cerdo.y);
    }
}

document.addEventListener("keydown", moverCerdo);

function moverCerdo(evento)
{
  var movimiento = 5;
  switch(evento.keyCode)
  {
    case teclas.UP:
      cerdo.y = cerdo.y - movimiento;
    break;
    case teclas.DOWN:
      cerdo.y = cerdo.y + movimiento;
    break;
    case teclas.LEFT:
      cerdo.x = cerdo.x - movimiento;
    break;
    case teclas.RIGHT:
      cerdo.x = cerdo.x + movimiento;
    break;
  }
  dibujar();
}

function aleatorio(min, max){
    var resultado;
    resultado = Math.floor(Math.random() * ( max - min + 1 ) + min );
    return resultado;
}