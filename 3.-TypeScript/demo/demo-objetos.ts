import {Persona} from './persona'
import {Usuario} from './usuario'
 let Persona1: Persona = new Persona("Edgar","Bucio",23);
 /*let Persona1: Persona = new Persona();
 Persona1.agregarNombre("Edgar");
 Persona1.agregarApellido("Bucio") ;
 Persona1.agregarEdad(23);*/
 Persona1.obetenerNombre();
 
 
 console.log(Persona1.obetenerNombre() , Persona1.obetenerApellido() , Persona1.obetenerEdad());
 
 let usuario1: Usuario = new Usuario("Jorge","Alcantar",24,"jb@gmail.com","abc123");
 console.log(usuario1.obetenerNombre());
 console.log(usuario1.inscribir());
 
 let fecha = new Date();
 console.log(fecha);

 