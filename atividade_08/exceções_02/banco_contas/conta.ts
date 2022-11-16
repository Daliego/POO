import { ValorInvalidoError, SaldoInsuficienteError } from "../errors";

export class Conta {
    private numero: string;
    private saldo: number = 0;
    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.depositar(saldo);
    }

    sacar(valor: number): void {
        this.validarValor(valor);
        if (this.saldo - valor < 0){
            throw new SaldoInsuficienteError("Saldo insuficiente");
        }
        this.saldo = this.saldo - valor;
    }
    depositar(valor: number): void {
        this.validarValor(valor);
        this.saldo = this.saldo + valor;
    }
    public get consultarNumero(): string {
        return this.numero;
    }
    public get consultarSaldo(): number {
        return this.saldo;
    }
    transferir(conta : Conta, valor : number): void{
        this.sacar(valor);
        conta.depositar(valor);
    }
    validarValor(valor: number): void {
        if (valor <= 0) {
            throw new ValorInvalidoError("Valor inválido");
        }
    }
}