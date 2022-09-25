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
    return Usuario;
}(Persona));
var Persona1 = new Persona("Edgar", "Bucio", 23);
/*let Persona1: Persona = new Persona();
Persona1.agregarNombre("Edgar");
Persona1.agregarApellido("Bucio") ;
Persona1.agregarEdad(23);*/
Persona1.obetenerNombre();
console.log(Persona1.obetenerNombre(), Persona1.obetenerApellido(), Persona1.obetenerEdad());
var usuario1 = new Usuario("Jorge", "Alcantar", 24, "jb@gmail.com", "abc123");
console.log(usuario1.obetenerNombre());
var fecha = new Date();
console.log(fecha);
var mensaje1 = 'Hola mundo';
var mensaje2 = 'Esta es una constante';
var mensaje3 = mensaje1 + " " + mensaje2;
var n1 = 3;
var n2 = 2.5;
var n3 = n1 * n2;
var booleano = true;
var opciones;
(function (opciones) {
    opciones[opciones["si"] = 1] = "si";
    opciones[opciones["no"] = 2] = "no";
})(opciones || (opciones = {}));
function imprimirMensajes() {
    console.log("mensaje 1: ", mensaje1);
    console.log("mensaje 2: ", mensaje2);
    console.log("mensaje 3: ", mensaje3);
    console.log("numero 1: ", n1);
    console.log("numero 2: ", n2);
    console.log("numero 3: ", n3);
    console.log("Enum: ", opciones);
}
imprimirMensajes();
