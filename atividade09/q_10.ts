abstract class Conta {
    protected nome: string;
    protected saldo: number;
    
    abstract get getNome(): string;
    abstract set setName(nome: string);
    abstract get getSaldo(): number;
    abstract set setSaldo(saldo: number);
}
interface Tributavel {
    calculoTributo(): number;
}

class ContaCorrente extends Conta implements Tributavel {
    get getNome(): string {
        return this.nome;
    }
    set setName(nome: string) {
        this.nome = nome
    }
    get getSaldo(): number {
        return this.saldo;
    }
    set setSaldo(saldo: number) {
        this.saldo = saldo;
    }
    calculoTributo(): number {
        return this.getSaldo * 10/100;
    }
}

class SeguroDeVida implements Tributavel{
    calculoTributo(): number {
        return 50.00;
    }
}
export  {
    Conta, Tributavel, SeguroDeVida, ContaCorrente
}
function  main02() {
    let contaCorrente: ContaCorrente = new ContaCorrente();
    contaCorrente.setName = "Conta01";
    contaCorrente.setSaldo = 50;
    console.log("Nome: " + contaCorrente.getNome + " " + "Saldo: " + contaCorrente.getSaldo);
}

main02();