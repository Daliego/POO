"use strict";
exports.__esModule = true;
var q_08_1 = require("./q_08");
var Test = /** @class */ (function () {
    function Test() {
        this.quadrado = new q_08_1.Quadrado(20, 20);
        this.triangulo = new q_08_1.Triangulo(4, 3, 3, 4, 5);
        this.retangulo = new q_08_1.Retangulo(20, 20);
        this.paralelogramo = new q_08_1.Paralelogramo(20, 20);
    }
    Test.prototype.testeComparar01 = function (poligono) {
        this.quadrado.comparar(poligono);
    };
    return Test;
}());
function main() {
    var teste = new Test();
    var indice01 = teste.quadrado.comparar(teste.triangulo);
    var indice02 = teste.quadrado.comparar(teste.retangulo);
    var indice03 = teste.triangulo.comparar(teste.paralelogramo);
    console.log(indice01);
    console.log(indice02);
    console.log(indice03);
}
main();
