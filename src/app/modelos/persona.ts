export class Persona {
    id: any;
    nombre : string;
    descripcion : string;
    acercade : string;
    imagen : string;
    telefono : string;
    email : string;

    constructor(nombre: string,descripcion: string,acercade: string,imagen: string,telefono: string,email: string){
        this.nombre = nombre;   
        this.descripcion = descripcion;
        this.acercade = acercade;
        this.imagen = imagen;
        this.telefono = telefono;
        this.email = email;
    }
}
