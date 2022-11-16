"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var errors_1 = require("../errors");
var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.saldo = 0;
        this.numero = numero;
        this.depositar(saldo);
    }
    Conta.prototype.sacar = function (valor) {
        this.validarValor(valor);
        if (this.saldo - valor < 0) {
            throw new errors_1.SaldoInsuficienteError("Saldo insuficiente");
        }
        this.saldo = this.saldo - valor;
    };
    Conta.prototype.depositar = function (valor) {
        this.validarValor(valor);
        this.saldo = this.saldo + valor;
    };
    Object.defineProperty(Conta.prototype, "consultarNumero", {
        get: function () {
            return this.numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "consultarSaldo", {
        get: function () {
            return this.saldo;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.transferir = function (conta, valor) {
        this.sacar(valor);
        conta.depositar(valor);
    };
    Conta.prototype.validarValor = function (valor) {
        if (valor <= 0) {
            throw new errors_1.ValorInvalidoError("Valor inválido");
        }
    };
    return Conta;
}());
exports.Conta = Conta;
