export class calculadora {
    constructor(numero1, numero2) {
        this.numero01 = numero1;
        this.numero02 = numero2;
    }
    soma() {
        return this.numero01 + this.numero02;
    }
    get operando1() {
        return this.numero01;
    }
    get operando2() {
        return this.numero02;
    }
}
let numero01 = 20;
let numero02 = 80;
let maquinaCalculadora = new calculadora(20, 80);
console.log("Soma: " + maquinaCalculadora.soma());
