"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        if (this.saldo - valor < 0) {
            return false;
        }
        else {
            this.saldo = this.saldo - valor;
            return true;
        }
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    //public get consultarNumero(){
    Conta.prototype.consultarNumero = function () {
        return this.numero;
    };
    //public get consultarSaldo(){
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferir = function (conta, valor) {
        if (this.sacar(valor) === false) {
            return false;
        }
        else {
            this.sacar(valor);
            conta.depositar(valor);
            return true;
        }
    };
    return Conta;
}());
exports.Conta = Conta;
