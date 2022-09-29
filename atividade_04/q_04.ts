
//Q_04
class Conta {
    numero_da_conta : string;
    saldo : number;

    constructor(numero_da_conta : string, saldo : number) {
        this.saldo = saldo;
        this.numero_da_conta = numero_da_conta;
    }

    depositar(valor : number) : void {
        this.saldo += valor;
    }
    sacar(valor : number) : void {
        this.saldo -= valor; 
    }
    transferir(conta : Conta, valor : number) : void {
        this.saldo -= valor;
        conta.saldo += valor;
    }
    consultarSaldo() : number {
        return this.saldo;
    }
}
let c1: Conta = new Conta("1",100);
let c2: Conta = new Conta("2",100);
let c3: Conta;
c1 = c2;
c3 = c1;
c1.sacar(10);

c1.transferir(c2,50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());
//a
//O resultado dos prints será: 90, 90, 90, pois a variável c1 foi atribuída a c2, logo c1 e 
//c2 apontam para o mesmo objeto, e c3 foi atribuída a c1, logo c3 também aponta para o mesmo objeto. Dessa maneira, todos possuem o mesmo saldo.

//b
//O coletor de lixo recolhe os objetos que não estão sendo mais utilizados, ou seja, que não 
//possuem mais referências apontando para eles. Dessa maneira, o objeto c1 não será mais utilizado, pois foi atribuído a c2, logo o coletor de lixo irá recolher o objeto c1.
