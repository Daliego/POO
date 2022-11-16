"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
const errors_1 = require("../errors");
const poupanca_1 = require("./poupanca");
class Banco {
    constructor() {
        this.contas = [];
    }
    inserir(c) {
        try {
            this.consultar(c.consultarNumero);
            throw new errors_1.ContaJaExistente(`Número de conta existente`);
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
    }
    consultar(numero_da_conta) {
        for (let conta_procurada of this.contas) {
            if (conta_procurada.consultarNumero == numero_da_conta) {
                return conta_procurada;
            }
        }
        throw new errors_1.ContaInexistenteError("Conta Inexistente");
    }
    consultarPorIndice(numero_da_conta) {
        let indice;
        for (let i = 0; i < this.contas.length; i++) {
            if (numero_da_conta == this.contas[i].consultarNumero) {
                indice = i;
                return indice;
            }
        }
        throw new errors_1.ContaInexistenteError("Conta Inexistente");
    }
    alterar(c) {
        let indice = this.consultarPorIndice(c.consultarNumero);
        this.contas[indice] = c;
    }
    excluir(numero_da_conta) {
        let indice = this.consultarPorIndice(numero_da_conta);
        for (let i = indice; i < this.contas.length; i++) {
            this.contas[i] = this.contas[i + 1];
        }
        this.contas.pop();
    }
    depositar(numero_da_conta, valor) {
        let indice = this.consultarPorIndice(numero_da_conta);
        this.contas[indice].depositar(valor);
    }
    sacar(numero, valor) {
        let indice = this.consultarPorIndice(numero);
        this.contas[indice].sacar(valor);
    }
    transferir(numeroCredito, numeroDebito, valor) {
        let contaCreditada = this.consultar(numeroCredito);
        let contaDebitada = this.consultar(numeroDebito);
        contaCreditada.transferir(contaDebitada, valor);
    }
    totalDeContas() {
        return this.contas.length;
    }
    totalDepositos() {
        let total = 0;
        for (let i = 0; i < this.contas.length; i++) {
            total = total + this.contas[i].consultarSaldo;
        }
        return total;
    }
    mediaSaldos() {
        return this.totalDepositos() / this.totalDeContas();
    }
    rederJuros(numero) {
        let conta = this.consultar(numero);
        if (conta instanceof poupanca_1.Poupanca) {
            conta.renderJuros();
        }
        else {
            throw new errors_1.PoupancaInvalidaError("Conta diferente de poupança");
        }
    }
    showContas() {
        return this.contas;
    }
}
exports.Banco = Banco;
