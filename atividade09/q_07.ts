/*

interface Calculos {
    area(): number;
    perimetro(): number;
}

class Quadrado implements Calculos {
    _base: number;
    _altura: number;
    constructor(base: number, altura: number) {
        this._base = base;
        this._altura = altura;
    }
    area(): number {
        return this._base * this._altura;
    }
    perimetro(): number {
        return this._base*2 + this._altura*2;
    }
}

class Retangulo implements Calculos {
    _base: number;
    _altura: number;
    constructor(base: number, altura: number) {
        this._base = base;
        this._altura = altura;
    }
    area(): number {
        return this._base * this._altura;
    }
    perimetro(): number {
        return this._base*2 + this._altura*2;
    }
}

class Triangulo implements Calculos {
    lado01: number;
    lado02: number;
    lado03: number;
    _base: number;
    _altura: number;
    constructor(base: number, altura: number, 
        lado1: number, lado2: number, lado3: number) {
        this._base = base;
        this._altura = altura;
        this.lado01 = lado1;
        this.lado02 = lado2;
        this.lado03 = lado3;
    }

    area(): number {
        return (this._base* this._altura)/2;
    }
    perimetro(): number {
        return this.lado01 + this.lado02 +  this.lado03;
    }
}

class Paralelogramo implements Calculos {
    _base: number;
    _altura: number;
    constructor(base: number, altura: number) {
        this._base = base;
        this._altura = altura;
    }
    area(): number {
        return this._base * this._altura;
    }
    perimetro(): number {
        return this._base*2 + this._altura*2;
    }
}

class TestGeometricForms {
    quadrado: Quadrado = new Quadrado(20, 20);
    triangulo: Triangulo = new Triangulo(4, 3, 3, 4, 5);
    retangulo: Retangulo = new Retangulo(20, 20);
    paralelogramo: Paralelogramo = new Paralelogramo(20, 20);
    
    showClassSquare(): void {
        console.log("Area: " + this.quadrado.area());
        console.log("Perímetro: " + this.quadrado.perimetro());
    }
    showClassTriangle(): void {
        console.log("Area: " + this.triangulo.area());
        console.log("Perímetro: " + this.triangulo.perimetro());
    }
    showClassRectangle(): void {
        console.log("Area: " + this.retangulo.area());
        console.log("Perímetro: " + this.retangulo.perimetro());
    }
    showClassParalelogram(): void {
        console.log("Area: " + this.paralelogramo.area());
        console.log("Perímetro: " + this.paralelogramo.perimetro());
    }
}

function main(): void {
    let teste: TestGeometricForms = new TestGeometricForms();
    teste.showClassParalelogram();
    teste.showClassRectangle();
    teste.showClassSquare();
    teste.showClassTriangle();
}

main() */