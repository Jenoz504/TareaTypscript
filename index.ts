
let btnCalcularPeso = document.getElementById('btnCalcularPeso');
if (btnCalcularPeso) {
    btnCalcularPeso.addEventListener('click', () => {
        let nombreInput = document.getElementById('txtNombre') as HTMLInputElement;
        let pesoInput = document.getElementById('txtPeso') as HTMLInputElement;
        let resultado = document.getElementById('resultado') as HTMLHeadingElement;

        if (nombreInput && pesoInput && resultado) {
            let nombre = nombreInput.value;
            let peso = parseFloat(pesoInput.value);
            if (peso) {
                console.log(nombre);
                console.log(peso);

                    let gravedad: number = 3.71;
                    let pesoEnPlaneta: number = peso * gravedad;
                    resultado.innerText = `${nombre}, tu peso en Marte es de ${pesoEnPlaneta} lbs`                    
                } else {
                    console.log('¡Por favor, introduce un peso válido!');
            }
        } else {
            console.log('¡Elementos de entrada no encontrados!');
        }
    });
}