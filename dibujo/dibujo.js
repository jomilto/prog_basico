var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;

function dibujaLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath(); 
}

dibujaLinea("red", 10, 0, 300, 10);
dibujaLinea("pink", 100, 200, 260, 90);

for( var i = 0; i <= lineas; i++){
    dibujaLinea("#AAF", 0, i*10, (i+1)*10, 300);
}

while (l <= lineas){
    dibujaLinea("gray", l*10, 0, 300, (l+1)*10);
    l = l + 1;
}

function obtenerColorAleatorio(){
	hexadecimalArray = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
	colorAleatorio="#"; // Inicia el primer valor del color hexadecimal

	// Generar un color aletario para cada línea
	for (i=0;i<6;i++){
		numero = numeroAletario(0, hexadecimalArray.length); // define un número aleatorio entre 0 el tamaño del array de los colores hexadecimales
		colorAleatorio += hexadecimalArray[numero]; // Concatena el string del color
	}
	return colorAleatorio;
}

function numeroAletario(inferior, superior){
	numPosibilidades = superior-inferior;
	numero = Math.floor(Math.random()*numPosibilidades);
	return parseInt(inferior) + numero;
}