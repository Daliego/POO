import {Conta} from './conta'
export class Poupanca extends Conta {
    private taxaDejuros: number;
    constructor(taxaDeJuros: number, numero: string, saldo: number) {
        super(numero, saldo);
        this.taxaDejuros = taxaDeJuros;
    }
    public renderJuros(): void {
        this.depositar(this.consultarSaldo * this.taxaDejuros/100);
    }
    get LerTaxaDeJuros(): number {
        return this.taxaDejuros;
    }
}