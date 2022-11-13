abstract class FiguraGeometrica {
    base: number;
    altura: number;
    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }
    abstract area(): number;
    abstract perimetro(): number;
}

interface Comparavel {
    comparar(poligono: FiguraGeometrica): number;
} 

interface Calculos {
    base: number;
    altura: number;
    area(): number;
    perimetro(): number;
}

class Quadrado extends FiguraGeometrica implements Comparavel{
    constructor(base: number, altura: number) {
        super(base, altura);
    }
    area(): number {
        return this.base * this.altura;
    }
    perimetro(): number {
        return this.base*2 + this.altura*2;
    }
    comparar(poligono: FiguraGeometrica): number {
        if (poligono.area() > this.area()) {
            return -1;
        } else if (poligono.area() == this.area()) {
            return 0;
        } else {
            return 1;
        }
    }
}

class Retangulo extends FiguraGeometrica implements Comparavel {
    constructor(base: number, altura: number) {
        super(base, altura);
    }
    area(): number {
        return this.base * this.altura;
    }
    perimetro(): number {
        return this.base*2 + this.altura*2;
    }
    comparar(poligono: FiguraGeometrica): number {
        if (poligono.area() > this.area()) {
            return -1;
        } else if (poligono.area() == this.area()) {
            return 0;
        } else {
            return 1;
        }
    }
}

class Triangulo extends FiguraGeometrica implements Comparavel{
    lado01: number;
    lado02: number;
    lado03: number;
    constructor(base: number, altura: number, lado1: number,
         lado2: number, lado3: number) {
        super(base, altura);
        this.lado01 = lado1;
        this.lado02 = lado2;
        this.lado03 = lado3;
    }
    area(): number {
        return (this.base* this.altura)/2;
    }
    perimetro(): number {
        return this.lado01 + this.lado02 +  this.lado03;
    }
    comparar(poligono: FiguraGeometrica): number {
        if (poligono.area() > this.area()) {
            return -1;
        } else if (poligono.area() == this.area()) {
            return 0;
        } else {
            return 1;
        }
    }
}

class Paralelogramo extends FiguraGeometrica implements Comparavel{
    constructor(base: number, altura: number) {
        super(base, altura);
    }
    area(): number {
        return this.base * this.altura;
    }
    perimetro(): number {
        return this.base*2 + this.altura*2;
    }
    comparar(poligono: FiguraGeometrica): number {
        if (poligono.area() > this.area()) {
            return -1;
        } else if (poligono.area() == this.area()) {
            return 0;
        } else {
            return 1;
        }
    }
}
export {Quadrado, Triangulo, Retangulo, Paralelogramo, FiguraGeometrica}

/* class Test{
    quadrado: Quadrado = new Quadrado(20, 20);
    triangulo: Triangulo = new Triangulo(4, 3, 3, 4, 5);
    retangulo: Retangulo = new Retangulo(20, 20);
    paralelogramo: Paralelogramo = new Paralelogramo(20, 20);

    testeComparar01(poligono: FiguraGeometrica): void {
        this.quadrado.comparar(poligono);
    }
}

function main(): void {
    let teste: Test = new Test();
    let indice01: number = teste.quadrado.comparar(teste.triangulo);
    let indice02: number = teste.quadrado.comparar(teste.retangulo);
    let indice03: number = teste.triangulo.comparar(teste.paralelogramo);
    console.log(indice01);
    console.log(indice02);
    console.log(indice03);
} */