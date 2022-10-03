"use strict";
exports.__esModule = true;
exports.Banco = exports.Conta = void 0;
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
        this.saldo = this.saldo + Number(valor);
    };
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
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
    }
    Banco.prototype.inserir = function (c) {
        var conta = this.consultar(c.numero);
        if (conta == null) {
            this.contas.push(c);
        }
        else {
            console.log("Já existe uma conta com esse numero");
        }
    };
    Banco.prototype.consultar = function (numero) {
        var conta_procurada;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.numero == numero) {
                conta_procurada = c;
                break;
            }
        }
        return conta_procurada;
    };
    Banco.prototype.consultar_indice = function (numero) {
        var indice = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Banco.prototype.alterar = function (c) {
        var indice = this.consultar_indice(c.numero);
        if (indice != -1) {
            this.contas[indice] = c;
        }
    };
    Banco.prototype.depositar = function (numero, valor) {
        var conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    };
    Banco.prototype.sacar = function (numero, valor) {
        var conta = this.consultar(numero);
        if (conta != null) {
            conta.sacar(valor);
            return true;
        }
        return false;
    };
    Banco.prototype.transferir = function (Credito, Debito, valor) {
        var conta1 = this.consultar(Credito);
        var conta2 = this.consultar(Debito);
        if (conta1 != null && conta2 != null) {
            conta2.transferir(conta1, valor);
        }
    };
    Banco.prototype.numero_de_contas = function () {
        return this.contas.length;
    };
    Banco.prototype.deposito_total = function () {
        var soma = 0;
        for (var i = 0; i < this.contas.length; i++) {
            soma += this.contas[i].saldo;
        }
        return soma;
    };
    Banco.prototype.media_dos_saldos = function () {
        return this.deposito_total() / this.numero_de_contas();
    };
    Banco.prototype.excluir_conta = function (id) {
        var indice = this.consultar_indice(id);
        if (indice != -1) {
            for (var i = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    };
    return Banco;
}());
exports.Banco = Banco;
