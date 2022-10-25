import { Conta } from "./conta";
import { Poupanca } from "./poupanca";
import {Banco} from "./banco";

function main(){
    let b: Banco = new Banco();
    b.inserir(new Conta("1", 100));
    b.inserir(new Conta("2", 200));
    b.inserir(new Conta("3", 300));
    let poupanca01: Poupanca = new Poupanca(1.5, "4", 700);
    b.inserir(poupanca01);
    console.log(b.consultar("4"));
    b.rederJuros("4");
    console.log(b.consultar("4"));

/*     b.consultarIndice;
    b.consultar("1").numero;
    b.consultar("1").saldo; */
}

main()