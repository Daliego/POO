class Empregado {
    private salario: number;
    constructor(salario: number) {
        this.salario = salario;
    }
    get calcularSalario(): number {
        return this.salario;
    }
}

class Diarista extends Empregado {
    constructor(salario: number) {
        super(salario);
    }
    get calcularSalario(): number {
        return super.calcularSalario/30
    }
}

class Horista extends Diarista {
    constructor(salario: number) {
        super(salario);
    }
    get calcularSalario(): number {
        return super.calcularSalario/24;
    }
}