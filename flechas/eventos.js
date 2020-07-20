var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorcito = "#FAA";
  var movimiento = 5;
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
  }
}

var boton = document.getElementById("limpiar");
boton.addEventListener("click",limpiar);

var xMouse = 150;
var yMouse = 150;
var mouseClick = false;

document.addEventListener("mousedown", coordenadaMouse);
document.addEventListener("mouseup", detenerMouse);
document.addEventListener("mousemove", dibujarMouse);

function coordenadaMouse(evento){
  xMouse = evento.layerX;
  yMouse = evento.layerY;
  mouseClick = true;
}

function detenerMouse(){
  mouseClick = false;
}

function dibujarMouse(evento){
  var colorcito = "#AAF";
  var movimiento = 2;
  if(mouseClick){
    dibujarLinea(colorcito, xMouse, yMouse, xMouse + movimiento, yMouse + movimiento, papel);
    xMouse = evento.layerX;
    yMouse = evento.layerY;
  }
}

function limpiar(){
  window.location.reload(); 
}