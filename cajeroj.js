//cajero

class Billete {

    constructor(v, c) { //funcion con 2 valores valor y cantidad

        this.valor = v;
        this.cantidad = c;

    }

}

function entregarDinero() { // la dispara el click

    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    for (var bi of caja) { // recorre array

        if (dinero > 0) {

            div = Math.floor(dinero / bi.valor); // redondea para abajo 
            if (div > bi.cantidad) {
                papeles = bi.cantidad
            } else {
                papeles = div;
            }

            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);

        }

    }

    if (dinero > 0) {


        resultado.innerHTML = "No tengo dinero";

    } else {

        for (var e of entregado) { //reccorro el array entregado

            if (e.cantidad > 0) {

                resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $ " + e.valor + "<br />";

            }



        }


    }
}



var caja = []; // array de obejto
var entregado = [];

caja.push(new Billete(100, 5));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 20));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 5));

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer"); // boton que lo toma del html
b.addEventListener("click", entregarDinero); // al hacer click (escucharlo) busca funcion entregar dinero