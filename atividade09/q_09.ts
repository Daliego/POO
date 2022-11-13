import { Quadrado, Triangulo, Retangulo, Paralelogramo, FiguraGeometrica } from "./q_08";
class Test{
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
}

main();