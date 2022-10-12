class Conta {
    private numero: string = "2";
    private saldo: number = 30;
    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): boolean {
        if (this.saldo - valor < 0){
            return false
        }else {
            this.saldo = this.saldo - valor;
            return true;
        }
    }
    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }
    get consultarNumero(){
        return this.numero;
    }
    get consultarSaldo(){
        return this.saldo;
    }
    transferir(conta : Conta, valor : number): boolean{
        if (this.sacar(valor) === false){
            return false;
        }else {
            this.sacar(valor);
            conta.depositar(valor);
            return true;
        }
    }
}

class Banco {
    private contas: Conta[] = [];
    inserir(c: Conta): void{
        let conta = this.consultar(c.consultarNumero);
        if (conta == undefined){
            this.contas.push(c);
        }else{
            console.log("ERRO: CONTA COM MESMO NÚMERO JÁ EXISTENTE");
        }

    }
/*     consultarNumero(c: Conta) : string{
        return c.consultarNumero();
    } */
    consultar(numero_da_conta: string){
        let conta_procurada!: Conta;
        for (let c of this.contas){
            if (c.consultarNumero === numero_da_conta){
                conta_procurada = c;
                return conta_procurada;
            }
        }
        return conta_procurada;
    }
    private consultarIndice(numero_da_conta: string): number{
        let indice = -1;
        for (let i = 0; i < this.contas.length; i++){
            if (numero_da_conta === this.contas[i].consultarNumero){
                indice = i;
                break;
            }
        }
        return indice;
    }
    alterar(c: Conta): void{
        let indice = this.consultarIndice(c.consultarNumero);
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
        if(indice != -1 && this.contas[indice].consultarSaldo != 0){
            this.contas[indice].sacar(valor);
        }else{
            console.log("ERRO");
        }
    }
    transferir(numeroCredito: string, numeroDebito: string, valor: number): void{
        let contaCreditada = this.consultar(numeroCredito);
        let contaDebitada = this.consultar(numeroDebito);
        if (contaCreditada != undefined && contaCreditada != undefined && contaCreditada.consultarSaldo != 0){
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
            total += this.contas[i].consultarSaldo;
        }
        return total;
    }
    mediaSaldos(): number{
        return this.totalDepositos()/this.totalDeContas();
    }
}

function maina(){
    let b: Banco = new Banco();
    b.inserir(new Conta("1", 100));
    b.inserir(new Conta("2", 200));
    console.log(b.consultar("2").consultarSaldo); //200
    let c2 = new Conta("2", 300);
    b.alterar(c2);
    console.log(b.consultar("2").consultarSaldo); //300
    b.inserir(new Conta("3", 300));
    b.excluir("1");
    b.depositar("3", 100);
    console.log(b.consultar("3").consultarSaldo); //400

/*     b.consultarIndice;
    b.consultar("1").numero;
    b.consultar("1").saldo; */
}

maina()