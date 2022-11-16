"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poupanca = void 0;
const conta_1 = require("./conta");
class Poupanca extends conta_1.Conta {
    constructor(taxaDeJuros, numero, saldo) {
        super(numero, saldo);
        this.taxaDejuros = taxaDeJuros;
    }
    renderJuros() {
        this.depositar(this.consultarSaldo * this.taxaDejuros / 100);
    }
    get LerTaxaDeJuros() {
        return this.taxaDejuros;
    }
}
exports.Poupanca = Poupanca;
