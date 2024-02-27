"use strict";
// import { Planeta } from "./planeta";
// const listaPlanetas: Planeta[] = [
//     new Planeta('Marte', 3.71),
//     new Planeta('Jupiter', 24.79),
//     new Planeta('Luna', 1.63)
// ];
var btnCalcularPeso = document.getElementById('btnCalcularPeso');
if (btnCalcularPeso) {
    btnCalcularPeso.addEventListener('click', function () {
        var nombreInput = document.getElementById('txtNombre');
        var pesoInput = document.getElementById('txtPeso');
        if (nombreInput && pesoInput) {
            var nombre = nombreInput.value;
            var peso = parseFloat(pesoInput.value);
            if (peso) {
                console.log(nombre);
                console.log(peso);
                // listaPlanetas.forEach(planeta => {
                var gravedad = 3.71;
                var pesoEnPlaneta = peso * gravedad;
                console.log("".concat(nombre, ", tu peso en Marte es de ").concat(pesoEnPlaneta, " lbs"));
                // });
            }
            else {
                console.log('¡Por favor, introduce un peso válido!');
            }
        }
        else {
            console.log('¡Elementos de entrada no encontrados!');
        }
    });
}
