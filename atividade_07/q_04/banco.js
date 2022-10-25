"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
var poupanca_1 = require("./poupanca");
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
    }
    Banco.prototype.inserir = function (c) {
        var conta = this.consultar(c.consultarNumero());
        if (conta == undefined) {
            this.contas.push(c);
        }
        else {
            console.log("ERRO: CONTA COM MESMO NÚMERO JÁ EXISTENTE");
        }
    };
    /*     consultarNumero(c: Conta) : string{
            return c.consultarNumero();
        } */
    Banco.prototype.consultar = function (numero_da_conta) {
        var conta_procurada;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.consultarNumero() === numero_da_conta) {
                conta_procurada = c;
                return conta_procurada;
            }
        }
        return conta_procurada;
    };
    Banco.prototype.consultarIndice = function (numero_da_conta) {
        var indice = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (numero_da_conta === this.contas[i].consultarNumero()) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Banco.prototype.alterar = function (c) {
        var indice = this.consultarIndice(c.consultarNumero());
        if (indice !== -1) {
            this.contas[indice] = c;
        }
        else {
            console.log("Conta não existe no banco");
        }
    };
    Banco.prototype.excluir = function (numero_da_conta) {
        var indice = this.consultarIndice(numero_da_conta);
        if (indice != -1) {
            for (var i = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
        else {
            console.log("A conta informada não existe");
        }
    };
    Banco.prototype.depositar = function (numero_da_conta, valor) {
        var indice = this.consultarIndice(numero_da_conta);
        if (indice != -1) {
            this.contas[indice].depositar(valor);
        }
        else {
            console.log("CONTA INEXISTENTE");
        }
    };
    Banco.prototype.sacar = function (numero, valor) {
        var indice = this.consultarIndice(numero);
        if (indice != -1 && this.contas[indice].consultarSaldo() != 0) {
            this.contas[indice].sacar(valor);
        }
        else {
            console.log("ERRO");
        }
    };
    Banco.prototype.transferir = function (numeroCredito, numeroDebito, valor) {
        var contaCreditada = this.consultar(numeroCredito);
        var contaDebitada = this.consultar(numeroDebito);
        if (contaCreditada != undefined && contaCreditada != undefined && contaCreditada.consultarSaldo() != 0) {
            contaCreditada.transferir(contaDebitada, valor);
        }
        else {
            console.log("ERRO");
        }
    };
    Banco.prototype.totalDeContas = function () {
        return this.contas.length;
    };
    Banco.prototype.totalDepositos = function () {
        var total = 0;
        for (var i = 0; i < this.contas.length; i++) {
            total += this.contas[i].consultarSaldo();
        }
        return total;
    };
    Banco.prototype.mediaSaldos = function () {
        return this.totalDepositos() / this.totalDeContas();
    };
    Banco.prototype.rederJuros = function (numero) {
        var conta = this.consultar(numero);
        if (conta instanceof poupanca_1.Poupanca) {
            conta.renderJuros();
        }
        else {
            console.log("Conta não possui a propriedade poupança");
        }
    };
    Banco.prototype.showContas = function () {
        return this.contas;
    };
    return Banco;
}());
exports.Banco = Banco;
