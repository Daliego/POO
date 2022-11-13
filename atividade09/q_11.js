"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var q_10_1 = require("./q_10");
var AuditoriaInterna = /** @class */ (function () {
    function AuditoriaInterna() {
        this.tributaveis = [];
    }
    AuditoriaInterna.prototype.adicionar = function (tributavel) {
        this.tributaveis.push(tributavel);
    };
    AuditoriaInterna.prototype.calcularTributos = function () {
        var contador = 0;
        var soma = 0;
        while (contador < this.tributaveis.length) {
            soma += this.tributaveis[contador].calculoTributo();
            contador++;
        }
        return soma;
    };
    return AuditoriaInterna;
}());
var Teste = /** @class */ (function () {
    function Teste() {
        this.contaCorrente_01 = new q_10_1.ContaCorrente();
        this.contaCorrente_02 = new q_10_1.ContaCorrente();
        this.seguroDeVida_01 = new q_10_1.SeguroDeVida();
        this.seguroDeVida_02 = new q_10_1.SeguroDeVida();
    }
    return Teste;
}());
function main03() {
    var testeMetodos = new Teste();
    testeMetodos.contaCorrente_01.setSaldo = 1000;
    testeMetodos.contaCorrente_02.setSaldo = 1000;
    var auditoria = new AuditoriaInterna();
    auditoria.adicionar(testeMetodos.contaCorrente_01);
    auditoria.adicionar(testeMetodos.contaCorrente_02);
    auditoria.adicionar(testeMetodos.seguroDeVida_01);
    auditoria.adicionar(testeMetodos.seguroDeVida_02);
    console.log(auditoria.calcularTributos());
}
main03();
