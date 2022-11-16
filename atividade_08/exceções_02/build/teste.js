"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = require("./banco_contas/conta");
const banco_1 = require("./banco_contas/banco");
function main() {
    let conta_01 = new conta_1.Conta("01", 1000);
    let conta_02 = new conta_1.Conta("01", 500);
    let conta_03 = new conta_1.Conta("02", 500);
    let banco = new banco_1.Banco();
    banco.inserir(conta_01);
    //banco.inserir(conta_02);
    console.log(banco.showContas());
}
main();
