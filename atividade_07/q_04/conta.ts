export class Conta {
    private numero: string;
    private saldo: number;
    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): boolean {
        if (this.saldo - valor < 0){
            return false
        }else {
            this.saldo = this.saldo - valor;
            return true;
        }
    }
    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }
    //public get consultarNumero(){
    public consultarNumero(){
        return this.numero;
    }
    //public get consultarSaldo(){
    public consultarSaldo(){
        return this.saldo;
    }
    transferir(conta : Conta, valor : number): boolean{
        if (this.sacar(valor) === false){
            return false;
        }else {
            this.sacar(valor);
            conta.depositar(valor);
            return true;
        }
    }
}