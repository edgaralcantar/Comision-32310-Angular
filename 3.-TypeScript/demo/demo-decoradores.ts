function decorador1(){
    console.log("Decorador 1 definido");
    return function(target: any, propertykey: string, descriptor: PropertyDescriptor){
        console.log("Decorador 1 esta haciendo el llamado ", target, propertykey, descriptor);
    }
}

class Ejemplo{
    @decorador1()
    metodo(){}
}