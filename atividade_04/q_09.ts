//força, nível e pontos atuais
class Jogador {
    força: number;
    nivel: number;
    pontos_atuais: number;
    constructor (força: number, nivel: number, pontos_atuais : number){
        this.força = força;
        this.nivel = nivel;
        this.pontos_atuais = pontos_atuais;
    }

    calcularAtaque () : number{
        return this.força * this.nivel;
    }
    atacar (Jogador : Jogador) : void{
        if (Jogador.estaVivo() === true){
            Jogador.pontos_atuais - this.calcularAtaque();
        }else {
            console.log('Impossível atacar, jogador morto')
        }
    }
    estaVivo () : boolean{
        return this.pontos_atuais > 0;
    }
    toString () : string{
        return `Força: ${this.força} \nNível: ${this.nivel} \nPontos_atuais: ${this.pontos_atuais}`;
    }
}

function main_01 (){
    let jogador_01: Jogador = new Jogador(10, 10, 10000);
    let jogador_02: Jogador = new Jogador(20, 15, 20000);

    jogador_01.atacar(jogador_02);
    console.log(jogador_02.estaVivo());
    jogador_02.atacar(jogador_01);
    console.log(jogador_01.estaVivo());

    console.log(jogador_01.toString());
    console.log(jogador_02.toString());
}

main_01()