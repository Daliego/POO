"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const errors_1 = require("../errors");
class Conta {
    constructor(numero, saldo) {
        this.saldo = 0;
        this.numero = numero;
        this.depositar(saldo);
    }
    sacar(valor) {
        this.validarValor(valor);
        if (this.saldo - valor < 0) {
            throw new errors_1.SaldoInsuficienteError("Saldo insuficiente");
        }
        this.saldo = this.saldo - valor;
    }
    depositar(valor) {
        this.validarValor(valor);
        this.saldo = this.saldo + valor;
    }
    get consultarNumero() {
        return this.numero;
    }
    get consultarSaldo() {
        return this.saldo;
    }
    transferir(conta, valor) {
        this.sacar(valor);
        conta.depositar(valor);
    }
    validarValor(valor) {
        if (valor <= 0) {
            throw new errors_1.ValorInvalidoError("Valor inválido");
        }
    }
}
exports.Conta = Conta;
