class Conta {
    numero: String;
    saldo: number;
    constructor(numero: String, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): boolean {
        if (this.saldo - valor < 0){
            console.log('#####-Saldo Insuficiente-#####')
            return false
        }else {
            this.saldo = this.saldo - valor;
            return true;
        }
    }
    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo(): number {
        return this.saldo;
    }
    transferir(conta : Conta, valor : number): boolean{
        if (this.sacar(valor) === false){
            console.log('#####-Transferência incompleta-#####');
            console.log('#####-Saldo insuficiente-#####');
            return false;
        }else {
            this.sacar(valor);
            conta.depositar(valor);
            return true;
        }
    }
}

function main_100() : void{
    let conta_01 : Conta = new Conta('01', 1000);
    let conta_02 : Conta = new Conta('02', 3000);

    console.log(conta_01.sacar(3000));
    conta_02.transferir(conta_01, 4000);
}

main_100();
