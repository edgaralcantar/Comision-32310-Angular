"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Persona.prototype.obetenerNombre = function () {
        return this.nombre;
    };
    Persona.prototype.obetenerApellido = function () {
        return this.apellido;
    };
    Persona.prototype.obetenerEdad = function () {
        return this.edad;
    };
    return Persona;
}());
exports.Persona = Persona;
