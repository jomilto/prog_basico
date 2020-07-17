var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

function dibujaLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath(); 
}

dibujaLinea("red", 10, 20, 60, 200);
dibujaLinea("pink", 100, 200, 260, 90);