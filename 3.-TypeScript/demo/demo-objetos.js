"use strict";
exports.__esModule = true;
var persona_1 = require("./persona");
var usuario_1 = require("./usuario");
var Persona1 = new persona_1.Persona("Edgar", "Bucio", 23);
/*let Persona1: Persona = new Persona();
Persona1.agregarNombre("Edgar");
Persona1.agregarApellido("Bucio") ;
Persona1.agregarEdad(23);*/
Persona1.obetenerNombre();
console.log(Persona1.obetenerNombre(), Persona1.obetenerApellido(), Persona1.obetenerEdad());
var usuario1 = new usuario_1.Usuario("Jorge", "Alcantar", 24, "jb@gmail.com", "abc123");
console.log(usuario1.obetenerNombre());
console.log(usuario1.inscribir());
var fecha = new Date();
console.log(fecha);
