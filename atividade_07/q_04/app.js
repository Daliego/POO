"use strict";
exports.__esModule = true;
var conta_1 = require("./conta");
var poupanca_1 = require("./poupanca");
var banco_1 = require("./banco");
var contaImposto_1 = require("./contaImposto");
var fs_1 = require("fs");
var input = require('prompt-sync')({ sigint: true });
var b = new banco_1.Banco();
var opcao = '';
do {
    console.log('\nBem vindo\nDigite uma opção:');
    console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
        '4 - Depositar 5 - Excluir 6 - Transferir\n' +
        '7 – Totalizações 8 - Render Juros 9 - Ler aquivo(.txt)\n' +
        '0 - Sair\n');
    opcao = input("Opção: ");
    switch (opcao) {
        case '1':
            inserir();
            break;
        case '2':
            consultar();
            break;
        case '3':
            sacar();
            break;
        case '4':
            depositar();
            break;
        case '5':
            excluir();
            break;
        case '6':
            transferir();
            break;
        case '7':
            totalizacoes();
            break;
        case '8':
            renderJuros();
            break;
        case '9':
            lerArquivoTxt();
            break;
    }
    input("Operação finalizada. Digite <enter>");
} while (opcao != "0");
{
    console.log("Aplicação encerrada");
}
var imposto = false;
var valorImposto = 0;
function inserir() {
    console.log("\nCadastrar conta\n");
    var numero = input('Digite o número da conta:');
    console.log("Digite o tipo de conta que deve ser inserida.");
    console.log("1 - Poupança" + "2 - Conta com impostos" + "3 - Conta comum");
    switch (opcao) {
        case '1':
            var taxaDeJuros = input("Digite a porcentagem que a poupanca rende: ");
            var poupanca = new poupanca_1.Poupanca(taxaDeJuros, numero, 0);
            b.inserir(poupanca);
            break;
        case '2':
            var imposto_1 = input("Digite a porcentagem cobrada de impostos: ");
            var contaComImposto = new contaImposto_1.contaImposto(imposto_1, numero, 0);
            b.inserir(contaComImposto);
            break;
        case '3':
            var conta_2 = new conta_1.Conta(numero, 0);
            b.inserir(conta_2);
            break;
    }
    var conta;
    conta = new conta_1.Conta(numero, 0);
    b.inserir(conta);
}
function consultar() {
    console.log("Colsulta de contas");
    var numero = input("Digite o número da conta que deve ser verificada: ");
    console.log(b.consultar(numero));
}
function sacar() {
    console.log("Você está sacando");
    var numero = input("Digite o número da conta que deve ser sacada: ");
    var valor = input("Digite o valor que deverá ser sacado da conta: ");
    var conta = b.consultar(numero);
    if (conta instanceof contaImposto_1.contaImposto) {
        conta.sacar(valor);
    }
    else {
        b.sacar(numero, valor);
    }
}
function depositar() {
    console.log("Você está depositando");
    var numero = input("Digite o número da conta que deve receber o depósito: ");
    var valor = input("Digite o valor que deve ser depositado: ");
    b.depositar(numero, valor);
}
function excluir() {
    console.log("Você está excluindo contas");
    var numero = input("Digite o número da conta que deve ser excluida: ");
    b.excluir(numero);
}
function transferir() {
    console.log("Você está transferindo");
    var conta_01 = input("Digite o número da conta que deve ser sacada: ");
    var conta_02 = input("Digite o número da conta que deve receber o depósito: ");
    var valor = input("Digite o valor que deve ser transferido: ");
    b.transferir(conta_02, conta_01, valor);
}
function totalizacoes() {
    console.log("Você está vendo o total depósitos");
    console.log(b.totalDepositos());
}
function renderJuros() {
    console.log("Você esta redendo juros.");
    var numeroDaConta = input("Digite o número da conta: ");
    var conta = b.consultar(numeroDaConta);
    if (conta instanceof poupanca_1.Poupanca) {
        b.rederJuros(numeroDaConta);
    }
    else {
        console.log("A conta não é poupança");
    }
}
/* function sacaComImposto(): void {
    let numero : string = input("Digite o número da conta que deve ser sacada: ");
    let valor: number = input("Digite o valor que deverá ser sacado da conta: ");
    let conta: Conta = b.consultar(numero);
    
} */
function lerArquivoTxt() {
    var lines = (0, fs_1.readFileSync)("arquivo.txt", "utf-8").split("\r\n");
    for (var i = 0; i < lines.length; i++) {
        var arrayInformaçoes = lines[i].split(",");
        //console.log(arrayInformaçoes);
        if (arrayInformaçoes[0] == "C") {
            var conta = new conta_1.Conta(arrayInformaçoes[1], Number(arrayInformaçoes[2]));
            b.inserir(conta);
        }
        else if (arrayInformaçoes[0] == "P") {
            var conta = new poupanca_1.Poupanca(Number(arrayInformaçoes[3]), arrayInformaçoes[1], Number(arrayInformaçoes[2]));
            b.inserir(conta);
        }
        else {
            var conta = new contaImposto_1.contaImposto(Number(arrayInformaçoes[3]), arrayInformaçoes[1], Number(arrayInformaçoes[2]));
            b.inserir(conta);
        }
    }
    console.log(b.showContas());
}
