
let mensaje1: string = 'Hola mundo';
const mensaje2: string = 'Esta es una constante';
let mensaje3: string = mensaje1 + " " + mensaje2;
let n1: number = 3;
let n2: number = 2.5;
let n3: number = n1 * n2;
let booleano: boolean = true;
enum opciones{
    si=1,
    no=2
}

function imprimirMensajes(){

    console.log("mensaje 1: ",mensaje1);
console.log("mensaje 2: ", mensaje2);
console.log("mensaje 3: ", mensaje3);

console.log("numero 1: " , n1);
console.log("numero 2: " , n2);
console.log("numero 3: " , n3);
console.log("Enum: " , opciones)
}
imprimirMensajes();
