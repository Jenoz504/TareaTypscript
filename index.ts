// import { Planeta } from "./planeta";

// const listaPlanetas: Planeta[] = [
//     new Planeta('Marte', 3.71),
//     new Planeta('Jupiter', 24.79),
//     new Planeta('Luna', 1.63)
// ];

let btnCalcularPeso = document.getElementById('btnCalcularPeso');
if (btnCalcularPeso) {
    btnCalcularPeso.addEventListener('click', () => {
        let nombreInput = document.getElementById('txtNombre') as HTMLInputElement;
        let pesoInput = document.getElementById('txtPeso') as HTMLInputElement;

        if (nombreInput && pesoInput) {
            let nombre = nombreInput.value;
            let peso = parseFloat(pesoInput.value);

            if (peso) {
                console.log(nombre);
                console.log(peso);

                // listaPlanetas.forEach(planeta => {
                    let gravedad: number = 3.71;
                    let pesoEnPlaneta: number = peso * gravedad;
                    console.log(`${nombre}, tu peso en Marte es de ${pesoEnPlaneta} lbs`);
                // });
            } else {
                console.log('¡Por favor, introduce un peso válido!');
            }
        } else {
            console.log('¡Elementos de entrada no encontrados!');
        }
    });
}