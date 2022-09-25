import {Persona} from './persona'
import {Inscripcion} from './inscripcion'
    export class Usuario extends Persona implements Inscripcion{
    

        private correo: string;
        private contrasena: string;
        nombreClase: string;
        fecha: Date; 
       
        constructor(nombre: string, apellido: string, edad: number, correo: string, contrasena: string){
        super(nombre,apellido,edad);
        this.correo=correo;
        this.contrasena=contrasena;
        }
       
        obetenerNombre(): string {
            return this.nombre + this.apellido;
        }
       
        inscribir() {
            return 'Inscribiendo usuario';
        }
        }