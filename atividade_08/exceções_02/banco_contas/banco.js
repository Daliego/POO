"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
var errors_1 = require("../errors");
var poupanca_1 = require("./poupanca");
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
    }
    Banco.prototype.inserir = function (c) {
        try {
            this.consultar(c.consultarNumero);
            throw new errors_1.ContaJaExistente("N\u00FAmero de conta existente");
        }
        catch (error) {
            /* if (erro instanceof ContaInexistenteError){
                this.contas.push(c)
            } */
            //console.log((<Error>error).message);
            if (error instanceof errors_1.ContaInexistenteError) {
                this.contas.push(c);
            }
            else {
                console.log(error.message);
            }
        }
        /* try {
            this.consultar(c.consultarNumero);
        } catch (error) {
            if (error instanceof ContaInexistenteError) {
                this.contas.push(c);
            } else {
                //console.log((<ContaJaExistente>erro).message)
            }
        } */
        /* for (let conta of this.contas) {
            if (c.consultarNumero == conta.consultarNumero) {
                throw new ContaJaExistente("Número de conta repetido");
            }
        }
        this.contas.push(c); */
    };
    Banco.prototype.consultar = function (numero_da_conta) {
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta_procurada = _a[_i];
            if (conta_procurada.consultarNumero == numero_da_conta) {
                return conta_procurada;
            }
        }
        throw new errors_1.ContaInexistenteError("Conta Inexistente");
    };
    Banco.prototype.consultarPorIndice = function (numero_da_conta) {
        var indice;
        for (var i = 0; i < this.contas.length; i++) {
            if (numero_da_conta == this.contas[i].consultarNumero) {
                indice = i;
                return indice;
            }
        }
        throw new errors_1.ContaInexistenteError("Conta Inexistente");
    };
    Banco.prototype.alterar = function (c) {
        var indice = this.consultarPorIndice(c.consultarNumero);
        this.contas[indice] = c;
    };
    Banco.prototype.excluir = function (numero_da_conta) {
        var indice = this.consultarPorIndice(numero_da_conta);
        for (var i = indice; i < this.contas.length; i++) {
            this.contas[i] = this.contas[i + 1];
        }
        this.contas.pop();
    };
    Banco.prototype.depositar = function (numero_da_conta, valor) {
        var indice = this.consultarPorIndice(numero_da_conta);
        this.contas[indice].depositar(valor);
    };
    Banco.prototype.sacar = function (numero, valor) {
        var indice = this.consultarPorIndice(numero);
        this.contas[indice].sacar(valor);
    };
    Banco.prototype.transferir = function (numeroCredito, numeroDebito, valor) {
        var contaCreditada = this.consultar(numeroCredito);
        var contaDebitada = this.consultar(numeroDebito);
        contaCreditada.transferir(contaDebitada, valor);
    };
    Banco.prototype.totalDeContas = function () {
        return this.contas.length;
    };
    Banco.prototype.totalDepositos = function () {
        var total = 0;
        for (var i = 0; i < this.contas.length; i++) {
            total += this.contas[i].consultarSaldo;
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
            throw new errors_1.PoupancaInvalidaError("Conta diferente de poupança");
        }
    };
    Banco.prototype.showContas = function () {
        return this.contas;
    };
    return Banco;
}());
exports.Banco = Banco;
