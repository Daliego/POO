import { AplicacaoError, ContaInexistenteError, ContaJaExistente, PoupancaInvalidaError } from "../errors";
import { Conta } from "./conta";
import { Poupanca } from "./poupanca";

export class Banco {
    private contas: Conta[] = [];

    inserir(c: Conta): void {
        try {
            this.consultar(c.consultarNumero);
            throw new ContaJaExistente(`Número de conta existente`);
        } catch (error) {
            /* if (erro instanceof ContaInexistenteError){
                this.contas.push(c)
            } */
            //console.log((<Error>error).message);
            if(error instanceof ContaInexistenteError) {
                this.contas.push(c);
            } else {
                  console.log((<Error>error).message);
            }
        }
        /* try {
            this.consultar(c.consultarNumero);
        } catch (error) {
            if (error instanceof ContaInexistenteError) {
                this.contas.push(c);
            } else {
                //console.log((<ContaJaExistente>erro).message)
            }
        } */
        /* for (let conta of this.contas) {
            if (c.consultarNumero == conta.consultarNumero) {
                throw new ContaJaExistente("Número de conta repetido");
            }
        }
        this.contas.push(c); */
    }
    consultar(numero_da_conta: string): Conta {
        for (let conta_procurada of this.contas){
            if (conta_procurada.consultarNumero == numero_da_conta){
                return conta_procurada;
            }
        }
        throw new ContaInexistenteError("Conta Inexistente");
    }
    consultarPorIndice(numero_da_conta: string): number {
        let indice: number;
        for (let i = 0; i < this.contas.length; i++){
            if (numero_da_conta == this.contas[i].consultarNumero) {
                indice = i;
                return indice;
            }
        }
        throw new ContaInexistenteError("Conta Inexistente");
    }
    alterar(c: Conta): void{
        let indice = this.consultarPorIndice(c.consultarNumero);
        this.contas[indice] = c;
    }
    excluir(numero_da_conta: string): void{
        let indice = this.consultarPorIndice(numero_da_conta);
        for (let i = indice; i < this.contas.length; i++){
            this.contas[i] = this.contas[i+1];
        }
        this.contas.pop();
    }
    depositar(numero_da_conta: string, valor: number): void{
        let indice: number = this.consultarPorIndice(numero_da_conta);
        this.contas[indice].depositar(valor);
    }
    sacar(numero: string, valor: number): void{
        let indice = this.consultarPorIndice(numero);
        this.contas[indice].sacar(valor);
        
    }
    transferir(numeroCredito: string, numeroDebito: string, valor: number): void{
        let contaCreditada = this.consultar(numeroCredito);
        let contaDebitada = this.consultar(numeroDebito);
        contaCreditada.transferir(contaDebitada, valor);
    }
    totalDeContas(): number{
        return this.contas.length;
    }
    totalDepositos(): number{
        let total: number = 0;
        for(let i = 0; i < this.contas.length; i++){
            total = total + this.contas[i].consultarSaldo;
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
            throw new PoupancaInvalidaError("Conta diferente de poupança")
        }
    }
    showContas(): Conta[] {
        return this.contas;
    }
}