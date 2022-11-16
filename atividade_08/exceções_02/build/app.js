"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = require("./banco_contas/conta");
const poupanca_1 = require("./banco_contas/poupanca");
const banco_1 = require("./banco_contas/banco");
const contaImposto_1 = require("./contaImposto");
const fs_1 = require("fs");
const errors_1 = require("./errors");
const input = require('prompt-sync')({ sigint: true });
let b = new banco_1.Banco();
let opcao;
do {
    console.log('\nBem vindo\nDigite uma opção:');
    console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
        '4 - Depositar 5 - Excluir 6 - Transferir\n' +
        '7 – Totalizações 8 - Render Juros 9 - Ler aquivo(.txt)\n' +
        '0 - Sair\n');
    opcao = ObterOpcao();
    try {
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
    }
    catch (erro) {
        console.log(erro.message);
    }
} while (opcao != "0");
{
    console.log("Aplicação encerrada");
}
function inserir() {
    try {
        console.log("\nCadastrar conta\n");
        let numero = receberNumeroDaConta('Digite o número da conta:');
        console.log("Digite o tipo de conta que deve ser inserida.");
        console.log("1 - Poupança" + ' ' + "2 - Conta com impostos" + ' ' + "3 - Conta comum");
        let opcao = ObterOpcao();
        let saldo;
        switch (opcao) {
            case '1':
                let taxaDeJuros = receberNumero("Digite a porcentagem que a poupanca rende: ");
                saldo = receberNumero("Digite o saldo da conta: ");
                let poupanca = new poupanca_1.Poupanca(taxaDeJuros, numero, saldo);
                b.inserir(poupanca);
                break;
            case '2':
                let imposto = receberNumero("Digite a porcentagem cobrada de impostos: ");
                saldo = receberNumero("Digite o saldo da conta: ");
                let contaComImposto = new contaImposto_1.contaImposto(imposto, numero, saldo);
                b.inserir(contaComImposto);
                break;
            case '3':
                saldo = receberNumero("Digite o saldo da conta: ");
                let conta = new conta_1.Conta(numero, saldo);
                b.inserir(conta);
                break;
        }
    }
    catch (erro) {
        console.log(erro.message);
    }
}
function consultar() {
    console.log("Colsulta de contas");
    try {
        let numero = receberNumeroDaConta("Digite o número da conta que deve ser verificada: ");
        console.log(b.consultar(numero));
    }
    catch (erro) {
        console.log(erro.message);
    }
}
function sacar() {
    console.log("Você está sacando");
    try {
        let numero = receberNumeroDaConta("Digite o número da conta que deve ser sacada: ");
        let valor = receberNumero("Digite o valor que deverá ser sacado da conta: ");
        let conta = b.consultar(numero);
        if (conta instanceof contaImposto_1.contaImposto) {
            conta.sacar(valor);
        }
        else {
            b.sacar(numero, valor);
        }
    }
    catch (erro) {
        console.log(erro.message);
    }
}
function depositar() {
    console.log("Você está depositando");
    try {
        let numero = receberNumeroDaConta("Digite o número da conta que deve receber o depósito: ");
        let valor = receberNumero("Digite o valor que deve ser depositado: ");
        b.depositar(numero, valor);
    }
    catch (erro) {
        console.log(erro.message);
    }
}
function excluir() {
    console.log("Você está excluindo contas");
    try {
        let numero = receberNumeroDaConta("Digite o número da conta que deve ser excluida: ");
        b.excluir(numero);
    }
    catch (erro) {
        console.log(erro.message);
    }
}
function transferir() {
    console.log("Você está transferindo");
    try {
        let conta_01 = receberNumeroDaConta("Digite o número da conta que deve ser sacada: ");
        let conta_02 = receberNumeroDaConta("Digite o número da conta que deve receber o depósito: ");
        let valor = receberNumero("Digite o valor que deve ser transferido: ");
        b.transferir(conta_02, conta_01, valor);
    }
    catch (erro) {
        console.log(erro.message);
    }
}
function totalizacoes() {
    console.log("Você está vendo o total depósitos");
    console.log(b.totalDepositos());
}
function renderJuros() {
    console.log("Você esta redendo juros.");
    try {
        let numeroDaConta = receberNumeroDaConta("Digite o número da conta: ");
        let conta = b.consultar(numeroDaConta);
        if (conta instanceof poupanca_1.Poupanca) {
            b.rederJuros(numeroDaConta);
        }
        else {
            throw new errors_1.WrongAccount("Conta não é poupança");
        }
    }
    catch (erro) {
        console.log(erro.message);
    }
}
/* function sacaComImposto(): void {
let numero : string = input("Digite o número da conta que deve ser sacada: ");
let valor: number = input("Digite o valor que deverá ser sacado da conta: ");
let conta: Conta = b.consultar(numero);

} */
function lerArquivoTxt() {
    let lines = (0, fs_1.readFileSync)("arquivo.txt", "utf-8").split("\r\n");
    for (let i = 0; i < lines.length; i++) {
        let arrayInformaçoes = lines[i].split(",");
        //console.log(arrayInformaçoes);
        if (arrayInformaçoes[0] == "C") {
            let conta = new conta_1.Conta(arrayInformaçoes[1], Number(arrayInformaçoes[2]));
            b.inserir(conta);
        }
        else if (arrayInformaçoes[0] == "P") {
            let conta = new poupanca_1.Poupanca(Number(arrayInformaçoes[3]), arrayInformaçoes[1], Number(arrayInformaçoes[2]));
            b.inserir(conta);
        }
        else {
            let conta = new contaImposto_1.contaImposto(Number(arrayInformaçoes[3]), arrayInformaçoes[1], Number(arrayInformaçoes[2]));
            b.inserir(conta);
        }
    }
    console.log(b.showContas());
}
function ObterOpcao() {
    let opcao = input("Opção: ");
    for (let i = 0; i <= 9; i++) {
        if (Number(opcao) == i) {
            return opcao;
        }
    }
    throw new errors_1.InputError("Input inválido: Opção não permitida.");
}
function receberNumero(mensagem) {
    let numero = input(mensagem);
    if (!isNaN(numero)) {
        return numero;
    }
    throw new errors_1.InputError("Input inválido: Valor inválido");
}
function receberNumeroDaConta(mensagem) {
    let numero = input(mensagem);
    if (!isNaN(Number(numero))) {
        return numero;
    }
    throw new errors_1.InputError("Input inválido: Número inválido");
}
