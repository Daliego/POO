import { getSupportedCodeFixes } from "../../node_modules/typescript/lib/typescript";
import { Conta } from "./conta";

export class contaImposto extends Conta {
    private taxaDeSaque: number;
    constructor(taxaDeSaque: number, numeroDaConta: string, saldo: number) {
        super(numeroDaConta, saldo);
        this.taxaDeSaque = taxaDeSaque;
    }
    sacar(valor: number): boolean {
        let total: number;
        if (this.consultarSaldo() - valor < 0){
            return false
        }else {
            total = valor + valor * (this.taxaDeSaque/100);
            super.sacar(total);
            return true;
        }
    }
}