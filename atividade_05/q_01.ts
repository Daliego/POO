class Conta {
    numero: string;
    saldo: number;
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
    consultarSaldo(): number {
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

class Banco{
    contas: Conta[] = []

    inserir(c: Conta): void{
        let conta: Conta = this.consultar(c.numero);
        if(conta == null){
            this.contas.push(c);
        }else{
            console.log("Já existe uma conta com esse numero");
        }
    }
    consultar(numero: string): Conta{
        let conta_procurada!: Conta;
        for(let c of this.contas){
            if(c.numero == numero){
                conta_procurada = c;
                break;
            }
        }
        return conta_procurada;
    }
    consultar_indice(numero: string): number{
        let indice = -1;
        for(let i = 0; i < this.contas.length; i++){
            if(this.contas[i].numero == numero){
                indice = i;
                break;
            }
        }
        return indice;
    }
    alterar(c: Conta): void{
        let indice = this.consultar_indice(c.numero);
        if(indice != -1){
            this.contas[indice] = c;
        }
    }
    depositar(numero: string, valor: number): void{
        let conta: Conta = this.consultar(numero);
        if(conta != null){
            conta.depositar(valor);
        }
    }
    sacar(numero: string, valor: number): boolean{
        let conta: Conta = this.consultar(numero);
        if(conta != null){
            conta.sacar(valor);
            return true;
        }
        return false;
    }
    transferir(Credito: string, Debito: string, valor: number): void{
        let conta1: Conta = this.consultar(Credito);
        let conta2: Conta = this.consultar(Debito);

        if(conta1 != null && conta2 != null){
            conta2.transferir(conta1, valor);
        }
    }

    numero_de_contas(): number{
        return this.contas.length;
    }

    deposito_total(): number{
        let soma = 0;

        for(let i = 0; i < this.contas.length; i++){
            soma += this.contas[i].saldo;
        }

        return soma;
    }

    media_dos_saldos(): number{
        return this.deposito_total()/this.numero_de_contas();
    }

    excluir_conta(id : string){
        let indice = this.consultar_indice(id);
        if (indice != -1){
            for (let i = indice; i < this.contas.length; i++){
                this.contas[i] = this.contas[i+1];
            }
            this.contas.pop();
        }
    }
}


let banco_01: Banco = new Banco();
banco_01.inserir(new Conta('1', 222));
banco_01.inserir(new Conta('2', 75));

banco_01.transferir('1', '2', 22);
banco_01.depositar('2', 1000);

console.log(`${banco_01.consultar('1').saldo}\n
${banco_01.consultar('2').saldo}\n
${banco_01.numero_de_contas()}\n
${banco_01.deposito_total()}\n
${banco_01.media_dos_saldos()}\n`);
