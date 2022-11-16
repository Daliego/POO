"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contaImposto = void 0;
const conta_1 = require("./banco_contas/conta");
class contaImposto extends conta_1.Conta {
    constructor(taxaDeSaque, numeroDaConta, saldo) {
        super(numeroDaConta, saldo);
        this.taxaDeSaque = taxaDeSaque;
    }
    sacar(valor) {
        let total;
        if (this.consultarSaldo - valor < 0) {
            return false;
        }
        else {
            total = valor + valor * (this.taxaDeSaque / 100);
            super.sacar(total);
            return true;
        }
    }
}
exports.contaImposto = contaImposto;
