import { ContaInexistenteError, ContaJaExistente, PoupancaInvalidaError,  } from "./errors";
import { Conta } from "./banco_contas/conta";
import { Poupanca } from "./banco_contas/poupanca";
import { Banco} from "./banco_contas/banco";

function main() {
    let conta_01: Conta = new Conta("01", 1000);
    let conta_02: Conta = new Conta("01", 500);
    let conta_03: Conta = new Conta("02", 500);
    let banco: Banco = new Banco();
    banco.inserir(conta_01);
    //banco.inserir(conta_02);
    console.log(banco.showContas());
}

main();