/* Crie uma classe Calculadora que tenha:
a. Dois atributos privados (operando1 e 2) do tipo number;
b. Dois métodos públicos, cada um representando uma operação básica;
c. Um construtor onde são passados os operandos e que esses inicializam os
atributos;
Teste a classe calculadora e seus métodos. Tente acessar os atributos
diretamente e verifique o que acontece. */

class Calculadora{
    private operando1: number
    private operando2: number;
    soma(){
        return this.operando1 + this.operando2;
    }
    subtracao(){
        return this.operando1 - this.operando2;
    }
    constructor (numero1: number, numero2: number){
        this.operando1 = numero1;
        this.operando2 = numero2;
    }
}

let numero1 : number = 90;    
let numero2 : number = 89;

let calculadora : Calculadora = new Calculadora(numero1, numero2);

console.log(calculadora);
console.log(calculadora.soma());
console.log(calculadora.subtracao());

/* calculadora.operando1;
calculadora.operando2; */
//É detectado um erro, por estar tentando acessar um elemento privado fora da classe

