import { Conta } from './banco_contas/conta';
import { Poupanca } from './banco_contas/poupanca';
import { Banco } from './banco_contas/banco';
import {contaImposto} from "./contaImposto"
import {readFileSync} from 'fs';
import { InputError, WrongAccount } from './errors';
import { StringExpressionOperatorReturningBoolean } from 'mongoose';

const input = require('prompt-sync')({sigint: true});

let b: Banco = new Banco();
let opcao: String;

do {
console.log('\nBem vindo\nDigite uma opção:');

console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
'4 - Depositar 5 - Excluir 6 - Transferir\n' +
'7 – Totalizações 8 - Render Juros 9 - Ler aquivo(.txt)\n' +
'0 - Sair\n');

opcao = ObterOpcao();
    try {
        switch(opcao) {
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
    } catch (erro: any) {
        console.log((<Error>erro).message);
    }

} while (opcao != "0") {
    console.log("Aplicação encerrada");
}

function inserir(): void {
    try{
        console.log("\nCadastrar conta\n");
        let numero: string = receberNumeroDaConta('Digite o número da conta:');
        console.log("Digite o tipo de conta que deve ser inserida.");
        console.log("1 - Poupança" + ' ' + "2 - Conta com impostos" + ' ' + "3 - Conta comum");
        let opcao: string = ObterOpcao();

        let saldo: number;
        switch(opcao){
            case '1':
                let taxaDeJuros: number = receberNumero("Digite a porcentagem que a poupanca rende: ");
                saldo = receberNumero("Digite o saldo da conta: ");
                let poupanca: Poupanca = new Poupanca(taxaDeJuros, numero, saldo);
                b.inserir(poupanca);
                break;

            case '2':
                let imposto: number = receberNumero("Digite a porcentagem cobrada de impostos: ")
                saldo = receberNumero("Digite o saldo da conta: ");
                let contaComImposto: contaImposto = new contaImposto(imposto, numero, saldo);
                b.inserir(contaComImposto);
                break;

            case '3':
                saldo = receberNumero("Digite o saldo da conta: ");
                let conta: Conta = new Conta(numero, saldo);
                b.inserir(conta);
                break;
        }
    } catch (erro: any) {
        console.log((<Error>erro).message);
    }
}

function consultar(): void {
    console.log("Colsulta de contas");
    try {
        let numero : string = receberNumeroDaConta("Digite o número da conta que deve ser verificada: ");
        console.log(b.consultar(numero));
    } catch (erro: any) {
        console.log((<Error>erro).message);
    }
}

function sacar(): void {
    console.log("Você está sacando")
    try {
        let numero : string = receberNumeroDaConta("Digite o número da conta que deve ser sacada: ");
        let valor: number = receberNumero("Digite o valor que deverá ser sacado da conta: ");
        let conta: Conta = b.consultar(numero);
        if (conta instanceof contaImposto) {
            (<contaImposto>conta).sacar(valor);
        } else {
            b.sacar(numero, valor);
        }
    } catch (erro: any) {
        console.log((<Error>erro).message);
    }
}

function depositar(): void {
    console.log("Você está depositando")
    try {
        let numero : string = receberNumeroDaConta("Digite o número da conta que deve receber o depósito: ");
        let valor : number = receberNumero("Digite o valor que deve ser depositado: ");
        b.depositar(numero, valor);
    } catch (erro: any) {
        console.log((<Error>erro).message);
    }
}

function excluir(): void {
    console.log("Você está excluindo contas")
    try {
        let numero : string = receberNumeroDaConta("Digite o número da conta que deve ser excluida: ");
        b.excluir(numero);
    } catch (erro: any) {
        console.log((<Error>erro).message);
    }
}

function transferir(): void {
    console.log("Você está transferindo")
    try {
        let conta_01 : string = receberNumeroDaConta("Digite o número da conta que deve ser sacada: ");
        let conta_02 : string = receberNumeroDaConta("Digite o número da conta que deve receber o depósito: ");
        let valor : number = receberNumero("Digite o valor que deve ser transferido: ");
        b.transferir(conta_02, conta_01, valor);
    } catch (erro: any) {
        console.log((<Error>erro).message);
    }
}

function totalizacoes(): void {
    console.log("Você está vendo o total depósitos");
    console.log(b.totalDepositos());
}

function renderJuros(): void {
    console.log("Você esta redendo juros.");
    try {
        let numeroDaConta: string = receberNumeroDaConta("Digite o número da conta: ");  
        let conta: Conta = b.consultar(numeroDaConta);
        if (conta instanceof Poupanca) {
            b.rederJuros(numeroDaConta);
        } else {
            throw new WrongAccount("Conta não é poupança");
        }
    } catch (erro: any) {
        console.log((<Error>erro).message);
    }
}

/* function sacaComImposto(): void {
let numero : string = input("Digite o número da conta que deve ser sacada: ");
let valor: number = input("Digite o valor que deverá ser sacado da conta: ");
let conta: Conta = b.consultar(numero);

} */

function lerArquivoTxt() {
    let lines = readFileSync("arquivo.txt", "utf-8").split("\r\n");
    for (let i = 0; i < lines.length; i++) {
        let arrayInformaçoes: string[] = lines[i].split(",");
        //console.log(arrayInformaçoes);
        if (arrayInformaçoes[0] == "C") {
            let conta: Conta = new Conta(arrayInformaçoes[1], Number(arrayInformaçoes[2]));
            b.inserir(conta);
        } else if (arrayInformaçoes[0] == "P") {
            let conta: Poupanca = new Poupanca(Number(arrayInformaçoes[3]), arrayInformaçoes[1], Number(arrayInformaçoes[2]));
            b.inserir(conta);
        } else {
            let conta: contaImposto = new contaImposto(Number(arrayInformaçoes[3]), arrayInformaçoes[1], Number(arrayInformaçoes[2]));
            b.inserir(conta);
        }
    }
    console.log(b.showContas());
}

function ObterOpcao(): string {
    let opcao: string = input("Opção: ");
    for (let i = 0; i <= 9; i++) {
        if (Number(opcao) == i) {
            return opcao;
        }
    }
    throw new InputError("Input inválido: Opção não permitida.");
}

function receberNumero(mensagem: string): number {
    let numero: number = input(mensagem);
    if (!isNaN(numero)) {
        return numero;
    }
    throw new InputError("Input inválido: Valor inválido");
}

function receberNumeroDaConta(mensagem: string): string {
    let numero: string = input(mensagem);
    if (!isNaN(Number(numero))) {
        return numero;
    }
    throw new InputError("Input inválido: Número inválido");
}
