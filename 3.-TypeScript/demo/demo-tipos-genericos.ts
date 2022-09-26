import { Persona } from "./persona";
import { Usuario } from "./Usuario";


let persona: Persona = new Persona("Edgar", "Bucio", 20);
let usuario: Usuario = new Usuario("jose" , "Garcia", 24, "jgar@gmail.com", "abc123");
let n1: number=0;

function verificarObjeto<T>(objeto: T){
    if(objeto instanceof Usuario){
        return "Hola "+ objeto.obetenerNombre() + " tu correo es: " + objeto.obtenerCorreo();
    }else if(objeto instanceof Persona){
            return "Hola " + objeto.obetenerNombre();
        }else{
            return "Objeto no determinado"
        }
    

}

console.log(verificarObjeto<Persona>(persona));
console.log(verificarObjeto<Usuario>(usuario));
console.log(verificarObjeto<number>(n1));