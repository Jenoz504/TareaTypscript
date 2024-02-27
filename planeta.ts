export class Planeta {
    private nombre: string;
    private gravedad:  number;
    
    constructor(_nombre: string, _gravedad: number) {
        this.nombre = _nombre;
        this.gravedad = _gravedad;
    }

    
    public get getNombre() : string {
        return this.nombre;
    }
    
    public get getGravedad() : Number {
        return this.gravedad
    }
    
    
}
