const input = require('prompt-sync')({sigint: true});
import { validateLocaleAndSetLanguage } from 'typescript';
import {Conta, Banco} from './banco';

let b: Banco = new Banco();
let opcao: String = '';

do {
console.log('\nBem vindo\nDigite uma opção:');

console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
'4 - Depositar 5 - Excluir 6 - Transferir\n' +
'7 – Totalizações' +
'0 - Sair\n');

opcao = input("Opção: ");

switch(opcao){
    case '1': 
        inserir()
        break

    case '2':
        consultar()
        break

    case '3':
        sacar()
        break

    case '4':
        depositar()
        break

    case '5':
        excluir()
        break

    case '6':
        transferir()
        break

    case '7':
        totalizacoes()
        break
}
input("Operação finalizada. Digite <enter>");

} while (opcao != "0");{
    console.log("Aplicação encerrada");
}

function inserir(): void {
    console.log("\nCadastrar conta\n");
    let numero: string = input('Digite o número da conta:');
    let conta: Conta;
    conta = new Conta(numero, 0);
    b.inserir(conta);
}

function consultar(){
    console.log("Colsulta de contas");
    let numero : string = input("Digite o número da conta que deve ser verificada: ");
    console.log(b.consultar(numero));
}

function sacar(){
    console.log("Você está sacando")
    let numero : string = input("Digite o número da conta que deve ser sacada: ");
    let valor: number = input("Digite o valor que deverá ser sacado da conta: ");
    b.sacar(numero, valor);
}

function depositar(){
    console.log("Você está depositando")
    let numero : string = input("Digite o número da conta que deve receber o depósito: ");
    let valor : number = input("Digite o valor que deve ser depositado: ");
    b.depositar(numero, valor);

}

function excluir(){
    console.log("Você está excluindo contas")
    let numero : string = input("Digite o número da conta que deve ser excluida: ");
    b.excluir_conta(numero);

}

function transferir(){
    console.log("Você está transferindo")
    let conta_01 : string = input("Digite o número da conta que deve ser sacada: ");
    let conta_02 : string = input("Digite o número da conta que deve receber o depósito: ");
    let valor : number = input("Digite o valor que deve ser transferido: ");
    b.transferir(conta_02, conta_01, valor);

}

function totalizacoes(){
    console.log("Você está vendo o total depósitos")
    console.log(b.deposito_total());

}