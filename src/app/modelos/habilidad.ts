import { Persona } from "./persona";

export class Habilidad {
    nombre : string;
    porcentaje : number;
    persona: any;

    constructor(nombre: string, porcentaje: number){
        this.nombre = nombre;
        this.porcentaje = porcentaje;   
    }

}
