import {Conta, Tributavel, SeguroDeVida, ContaCorrente} from './q_10'
class AuditoriaInterna {
    tributaveis: Tributavel[] = [];
    adicionar(tributavel: Tributavel) {
        this.tributaveis.push(tributavel);
    }
    calcularTributos() {
        let contador = 0;
        let soma = 0;
        while (contador < this.tributaveis.length) {
            soma += this.tributaveis[contador].calculoTributo();
            contador++;
        }
        return soma;
    }
}

class Teste {
    contaCorrente_01: ContaCorrente = new ContaCorrente();
    contaCorrente_02: ContaCorrente = new ContaCorrente();
    seguroDeVida_01: SeguroDeVida = new SeguroDeVida();
    seguroDeVida_02: SeguroDeVida = new SeguroDeVida();
}

function  main03() {
    let testeMetodos: Teste = new Teste();
    testeMetodos.contaCorrente_01.setSaldo = 1000;
    testeMetodos.contaCorrente_02.setSaldo = 1000;

    let auditoria: AuditoriaInterna = new AuditoriaInterna();
    auditoria.adicionar(testeMetodos.contaCorrente_01);
    auditoria.adicionar(testeMetodos.contaCorrente_02);
    auditoria.adicionar(testeMetodos.seguroDeVida_01);
    auditoria.adicionar(testeMetodos.seguroDeVida_02);

    console.log(auditoria.calcularTributos())
}

main03();