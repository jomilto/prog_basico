class Billete{
    constructor($valor,$cantidad) {
        this.valor = $valor;
        this.cantidad = $cantidad;
    }
}

var cajero = [];

cajero.push( new Billete(50,3) );
cajero.push( new Billete(20,2) );
cajero.push( new Billete(10,2) );

var boton = document.getElementById("boton");
var resultado = document.getElementById("res");

boton.addEventListener("click", entregarDinero);

function entregarDinero(){
    resultado.innerHTML = "";

    var entregado = [];
    var dinero = parseInt(document.getElementById("dinero").value);
    var div = 0;
    var papeles = 0;

    if (totalCajero() < dinero) {
        resultado.innerHTML = "No hay suficiente money";
    }else{
        for (var bi of cajero) {
            if (dinero > 0){
                div = Math.floor(dinero/bi.valor);
                if( div > bi.cantidad ){
                    papeles = bi.cantidad;
                }else{
                    papeles = div; 
                }
                entregado.push( new Billete(bi.valor, papeles));
                dinero = dinero - (bi.valor * papeles);
                bi.cantidad = bi.cantidad - papeles;
            }
        }
        for (const e of entregado) {
            if( e.cantidad >0 ){
                resultado.innerHTML += "Billete: $" + e.valor + " Cantidad: " + e.cantidad + "<hr />";
            }
        }

    }
}

function totalCajero() {
    var total = 0;
    for (const e of cajero) {
        total += e.cantidad * e.valor;
    }
    return total;
}