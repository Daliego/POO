class Equipamento {
    ligado: boolean;
    constructor(ligado: boolean) {
        this.ligado = ligado;
    }
    liga() {
        if (this.estaLigado() == false) {
            this.ligado = true;
        } else {
            console.log("O equipamento já está ligado.");
        }
    }
    desliga() {
        if (this.estaLigado() == true) {
            this.ligado = false;
        } else {
            console.log("O equipamento já está desligado.");
        }
    }
    inverte() {
        this.ligado = !this.ligado;
    }
    estaLigado(): boolean {
        return this.ligado;
    }
}

function main() {
    let equipamento: Equipamento = new Equipamento(false);
    equipamento.liga();
    console.log(equipamento.estaLigado());
    equipamento.desliga();
    console.log(equipamento.estaLigado());
    equipamento.inverte();
    console.log(equipamento.estaLigado());
    

}

main();