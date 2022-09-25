"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Usuario = void 0;
var persona_1 = require("./persona");
var Usuario = /** @class */ (function (_super) {
    __extends(Usuario, _super);
    function Usuario(nombre, apellido, edad, correo, contrasena) {
        var _this = _super.call(this, nombre, apellido, edad) || this;
        _this.correo = correo;
        _this.contrasena = contrasena;
        return _this;
    }
    Usuario.prototype.obetenerNombre = function () {
        return this.nombre + this.apellido;
    };
    Usuario.prototype.inscribir = function () {
        return 'Inscribiendo usuario';
    };
    return Usuario;
}(persona_1.Persona));
exports.Usuario = Usuario;
