var imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pocachu"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png";

var coleccion = [];

coleccion.push( new Pakiman("normal","cauchin",100,30) );
coleccion.push( new Pakiman("volador","pocachu",80,50) );
coleccion.push( new Pakiman("pelea","tocinauro",120,40) );

for( var ele in coleccion[0]){
    console.log(ele);
}

for ( var ele of coleccion ){
    ele.mostrar();
}