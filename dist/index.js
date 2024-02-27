"use strict";
var btnCalcularPeso = document.getElementById('btnCalcularPeso');
if (btnCalcularPeso) {
    btnCalcularPeso.addEventListener('click', function () {
        var nombreInput = document.getElementById('txtNombre');
        var pesoInput = document.getElementById('txtPeso');
        var resultado = document.getElementById('resultado');
        if (nombreInput && pesoInput && resultado) {
            var nombre = nombreInput.value;
            var peso = parseFloat(pesoInput.value);
            if (peso) {
                console.log(nombre);
                console.log(peso);
                var gravedad = 3.71;
                var pesoEnPlaneta = peso * gravedad;
                resultado.innerText = "".concat(nombre, ", tu peso en Marte es de ").concat(pesoEnPlaneta, " lbs");
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
