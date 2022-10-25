import {Conta} from './conta';
import {Poupanca} from './poupanca';
import {Banco} from "./banco";
import {contaImposto} from "./contaImposto"
import { ImportsNotUsedAsValues, nodeModuleNameResolver, PostfixUnaryOperator } from '../../node_modules/typescript/lib/typescript';
import {readFileSync} from 'fs';

const input = require('prompt-sync')({sigint: true});

let b: Banco = new Banco();
let opcao: String = '';

do {
console.log('\nBem vindo\nDigite uma opção:');

console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
'4 - Depositar 5 - Excluir 6 - Transferir\n' +
'7 – Totalizações 8 - Render Juros 9 - Ler aquivo(.txt)\n' +
'0 - Sair\n');

opcao = input("Opção: ");

switch(opcao){
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

} while (opcao != "0");{
    console.log("Aplicação encerrada");
}
let imposto = false;
let valorImposto = 0;
function inserir(): void {
    console.log("\nCadastrar conta\n");
    let numero: string = input('Digite o número da conta:');
    console.log("Digite o tipo de conta que deve ser inserida.");
    console.log("1 - Poupança" + "2 - Conta com impostos" + "3 - Conta comum");

    switch(opcao){
        case '1':
            let taxaDeJuros: number = input("Digite a porcentagem que a poupanca rende: ")
            let poupanca: Poupanca = new Poupanca(taxaDeJuros, numero, 0);
            b.inserir(poupanca);
            break;
    
        case '2':
            let imposto: number = input("Digite a porcentagem cobrada de impostos: ")
            let contaComImposto: contaImposto = new contaImposto(imposto, numero, 0);
            b.inserir(contaComImposto);
            break;
    
        case '3':
            let conta: Conta = new Conta(numero, 0);
            b.inserir(conta);
            break;
    }
    let conta: Conta;
    conta = new Conta(numero, 0);
    b.inserir(conta);
}

function consultar(): void{
    console.log("Colsulta de contas");
    let numero : string = input("Digite o número da conta que deve ser verificada: ");
    console.log(b.consultar(numero));
}

function sacar(): void{
    console.log("Você está sacando")
    let numero : string = input("Digite o número da conta que deve ser sacada: ");
    let valor: number = input("Digite o valor que deverá ser sacado da conta: ");
    let conta: Conta = b.consultar(numero);
    if (conta instanceof contaImposto) {
        conta.sacar(valor)
    } else {
        b.sacar(numero, valor);
    }
}

function depositar(): void{
    console.log("Você está depositando")
    let numero : string = input("Digite o número da conta que deve receber o depósito: ");
    let valor : number = input("Digite o valor que deve ser depositado: ");
    b.depositar(numero, valor);
}

function excluir(): void {
    console.log("Você está excluindo contas")
    let numero : string = input("Digite o número da conta que deve ser excluida: ");
    b.excluir(numero);

}

function transferir(): void {
    console.log("Você está transferindo")
    let conta_01 : string = input("Digite o número da conta que deve ser sacada: ");
    let conta_02 : string = input("Digite o número da conta que deve receber o depósito: ");
    let valor : number = input("Digite o valor que deve ser transferido: ");
    b.transferir(conta_02, conta_01, valor);

}

function totalizacoes(): void {
    console.log("Você está vendo o total depósitos");
    console.log(b.totalDepositos());

}

function renderJuros(): void {
    console.log("Você esta redendo juros.");
    let numeroDaConta = input("Digite o número da conta: ");  
    let conta = b.consultar(numeroDaConta);
    if (conta instanceof Poupanca) {
        b.rederJuros(numeroDaConta);
    } else {
        console.log("A conta não é poupança");
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
