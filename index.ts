import {Planeta} from "./planeta"

interface HTMLInputElement {    
}

interface HTMLButtonElement {
    addEventListener(event: string, callback: EventListenerOrEventListenerObject): void;
}

const listaPlanetas: Planeta[] = [
    new Planeta('Marte', 3.71 ),
    new Planeta('Jupiter', 24.79),
    new Planeta('Luna', 1.63)
]

let nombre: HTMLInputElement | null = document.getElementById('txtNombre');
if (nombre !== null) {    
    console.log(nombre);
} else {
    console.error('txtNombre');    
}


let peso: HTMLInputElement | null = document.getElementById('txtPeso');
if (peso !== null) {    
    console.log(peso);
} else {
    console.error('txtNombre');    
}

let botonCalcular: HTMLButtonElement | null = document.getElementById('btnCalcularPeso');

if (botonCalcular !== null) {
    botonCalcular.addEventListener('click', () => {
        listaPlanetas.forEach(planeta => {
            console.log(`tu peso en ${planeta.getNombre} es de ${planeta.getGravedad}`);
        });
    });
}