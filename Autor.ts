export class Autor{

    private nombre: string
    private edad: number
    private profesion:string

    constructor(nombre:string, edad:number, profesion:string) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    set modificarNombre(nombre:string) {
        this.nombre = nombre;
    }

    set modificarEdad(edad:number) {
        this.edad = edad;
    }

    set modificarProfesion(profesion:string) {
        this.profesion = profesion;
    }

    get consultarNombre() {
        return this.nombre
    }

    get consultarEdad() {
        return this.edad
    }

    get consultarProfesion() {
        return this.profesion
    }

}