class veiculo {
    private placa: string;
    private ano: number;
    constructor(placa: string, ano: number)  {
        this.placa = placa;
        this.ano = ano;
    }
}

class Carro extends veiculo {
    modelo: string;
    constructor(modelo: string, placa: string, ano: number)  {
        super(placa, ano);
        this.modelo = modelo;
    }
}

class CarroEletrico extends Carro {
    autonomiaBateria: number;
    constructor(autonomiaBateria: number, modelo: string, placa: string, ano: number) {
        super(modelo, placa, ano);
        this.autonomiaBateria = autonomiaBateria;
    }
}