import { Conta } from "./conta";
import { Poupanca } from "./poupanca";

export class Banco {
    private contas: Conta[] = [];
    inserir(c: Conta): void{
        let conta = this.consultar(c.consultarNumero());
        if (conta == undefined){
            this.contas.push(c);
        }else{
            console.log("ERRO: CONTA COM MESMO NÚMERO JÁ EXISTENTE");
        }

    }
/*     consultarNumero(c: Conta) : string{
        return c.consultarNumero();
    } */
    consultar(numero_da_conta: string): Conta{
        let conta_procurada!: Conta;
        for (let c of this.contas){
            if (c.consultarNumero() === numero_da_conta){
                conta_procurada = c;
                return conta_procurada;
            }
        }
        return conta_procurada;
    }
    private consultarIndice(numero_da_conta: string): number{
        let indice = -1;
        for (let i = 0; i < this.contas.length; i++){
            if (numero_da_conta === this.contas[i].consultarNumero()){
                indice = i;
                break;
            }
        }
        return indice;
    }
    alterar(c: Conta): void{
        let indice = this.consultarIndice(c.consultarNumero());
        if (indice !== -1){
            this.contas[indice] = c;
        }else{
            console.log("Conta não existe no banco");
        }
    }
    excluir(numero_da_conta: string): void{
        let indice = this.consultarIndice(numero_da_conta);
        if (indice != -1){
            for (let i = indice; i < this.contas.length; i++){
                this.contas[i] = this.contas[i+1];
            }
            this.contas.pop();
        }else{
            console.log("A conta informada não existe");
        }
    }
    depositar(numero_da_conta: string, valor: number): void{
        let indice = this.consultarIndice(numero_da_conta);
        if (indice != -1){
            this.contas[indice].depositar(valor);
        }else{
            console.log("CONTA INEXISTENTE");
        }
    }
    sacar(numero: string, valor: number): void{
        let indice = this.consultarIndice(numero);
        if(indice != -1 && this.contas[indice].consultarSaldo() != 0){
            this.contas[indice].sacar(valor);
        }else{
            console.log("ERRO");
        }
    }
    transferir(numeroCredito: string, numeroDebito: string, valor: number): void{
        let contaCreditada = this.consultar(numeroCredito);
        let contaDebitada = this.consultar(numeroDebito);
        if (contaCreditada != undefined && contaCreditada != undefined && contaCreditada.consultarSaldo() != 0){
            contaCreditada.transferir(contaDebitada, valor);
        }else{
            console.log("ERRO");
        }
    }
    totalDeContas(): number{
        return this.contas.length;
    }
    totalDepositos(): number{
        let total: number = 0;
        for(let i = 0; i < this.contas.length; i++){
            total += this.contas[i].consultarSaldo();
        }
        return total;
    }
    mediaSaldos(): number{
        return this.totalDepositos()/this.totalDeContas();
    }
    rederJuros(numero: string): void {
        let conta: Conta = this.consultar(numero);
        if (conta instanceof Poupanca) {
            (<Poupanca> conta).renderJuros();
        } else {
            console.log("Conta não possui a propriedade poupança");
        }
    }
    showContas(): Conta[] {
        return this.contas;
    }
}