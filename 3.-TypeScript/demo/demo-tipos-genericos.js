"use strict";
exports.__esModule = true;
var persona_1 = require("./persona");
var Usuario_1 = require("./Usuario");
var persona = new persona_1.Persona("Edgar", "Bucio", 20);
var usuario = new Usuario_1.Usuario("jose", "Garcia", 24, "jgar@gmail.com", "abc123");
var n1 = 0;
function verificarObjeto(objeto) {
    if (objeto instanceof Usuario_1.Usuario) {
        return "Hola " + objeto.obetenerNombre() + " tu correo es: " + objeto.obtenerCorreo();
    }
    else if (objeto instanceof persona_1.Persona) {
        return "Hola " + objeto.obetenerNombre();
    }
    else {
        return "Objeto no determinado";
    }
}
console.log(verificarObjeto(persona));
console.log(verificarObjeto(usuario));
console.log(verificarObjeto(n1));
