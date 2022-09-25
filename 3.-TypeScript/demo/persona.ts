
export class Persona{
    protected nombre: string ;
    protected apellido: string;
    protected edad: number;
 
    constructor(nombre: string, apellido: string, edad: number){ //Alternativa para agregar los "set" de los datos
     this.nombre = nombre;
     this.apellido = apellido;
     this.edad= edad;
    }
 
     obetenerNombre(){
         return this.nombre;
     }
     obetenerApellido(){
         return this.apellido;
     }
     obetenerEdad(){
         return this.edad;
     }
 
    /* agregarNombre(nombre: string){
  this.nombre = nombre;
     }
     agregarApellido(apellido: string){
         this.apellido = apellido;
     }
     agregarEdad(edad: number){
         this.edad= edad;
     }*/
  }