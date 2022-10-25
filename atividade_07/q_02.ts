export class calculadora {
    private numero01 : number;
    private numero02 : number;
    
    constructor(numero1: number, numero2: number) {
        this.numero01 = numero1;
        this.numero02 = numero2;
    }

    soma(): number {
        return this.numero01 + this.numero02;
    }
    get operando1(): number {
        return this.numero01;
    }
    get operando2(): number {
        return this.numero02;
    }
}

let numero01 = 20;
let numero02 = 80;
let maquinaCalculadora = new calculadora(20, 80);

console.log("Soma: " + maquinaCalculadora.soma());



