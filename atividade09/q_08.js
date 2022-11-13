"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.FiguraGeometrica = exports.Paralelogramo = exports.Retangulo = exports.Triangulo = exports.Quadrado = void 0;
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    return FiguraGeometrica;
}());
exports.FiguraGeometrica = FiguraGeometrica;
var Quadrado = /** @class */ (function (_super) {
    __extends(Quadrado, _super);
    function Quadrado(base, altura) {
        return _super.call(this, base, altura) || this;
    }
    Quadrado.prototype.area = function () {
        return this.base * this.altura;
    };
    Quadrado.prototype.perimetro = function () {
        return this.base * 2 + this.altura * 2;
    };
    Quadrado.prototype.comparar = function (poligono) {
        if (poligono.area() > this.area()) {
            return -1;
        }
        else if (poligono.area() == this.area()) {
            return 0;
        }
        else {
            return 1;
        }
    };
    return Quadrado;
}(FiguraGeometrica));
exports.Quadrado = Quadrado;
var Retangulo = /** @class */ (function (_super) {
    __extends(Retangulo, _super);
    function Retangulo(base, altura) {
        return _super.call(this, base, altura) || this;
    }
    Retangulo.prototype.area = function () {
        return this.base * this.altura;
    };
    Retangulo.prototype.perimetro = function () {
        return this.base * 2 + this.altura * 2;
    };
    Retangulo.prototype.comparar = function (poligono) {
        if (poligono.area() > this.area()) {
            return -1;
        }
        else if (poligono.area() == this.area()) {
            return 0;
        }
        else {
            return 1;
        }
    };
    return Retangulo;
}(FiguraGeometrica));
exports.Retangulo = Retangulo;
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(base, altura, lado1, lado2, lado3) {
        var _this = _super.call(this, base, altura) || this;
        _this.lado01 = lado1;
        _this.lado02 = lado2;
        _this.lado03 = lado3;
        return _this;
    }
    Triangulo.prototype.area = function () {
        return (this.base * this.altura) / 2;
    };
    Triangulo.prototype.perimetro = function () {
        return this.lado01 + this.lado02 + this.lado03;
    };
    Triangulo.prototype.comparar = function (poligono) {
        if (poligono.area() > this.area()) {
            return -1;
        }
        else if (poligono.area() == this.area()) {
            return 0;
        }
        else {
            return 1;
        }
    };
    return Triangulo;
}(FiguraGeometrica));
exports.Triangulo = Triangulo;
var Paralelogramo = /** @class */ (function (_super) {
    __extends(Paralelogramo, _super);
    function Paralelogramo(base, altura) {
        return _super.call(this, base, altura) || this;
    }
    Paralelogramo.prototype.area = function () {
        return this.base * this.altura;
    };
    Paralelogramo.prototype.perimetro = function () {
        return this.base * 2 + this.altura * 2;
    };
    Paralelogramo.prototype.comparar = function (poligono) {
        if (poligono.area() > this.area()) {
            return -1;
        }
        else if (poligono.area() == this.area()) {
            return 0;
        }
        else {
            return 1;
        }
    };
    return Paralelogramo;
}(FiguraGeometrica));
exports.Paralelogramo = Paralelogramo;
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
