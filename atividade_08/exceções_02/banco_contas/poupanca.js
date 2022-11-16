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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poupanca = void 0;
var conta_1 = require("./conta");
var Poupanca = /** @class */ (function (_super) {
    __extends(Poupanca, _super);
    function Poupanca(taxaDeJuros, numero, saldo) {
        var _this = _super.call(this, numero, saldo) || this;
        _this.taxaDejuros = taxaDeJuros;
        return _this;
    }
    Poupanca.prototype.renderJuros = function () {
        this.depositar(this.consultarSaldo * this.taxaDejuros / 100);
    };
    Object.defineProperty(Poupanca.prototype, "LerTaxaDeJuros", {
        get: function () {
            return this.taxaDejuros;
        },
        enumerable: false,
        configurable: true
    });
    return Poupanca;
}(conta_1.Conta));
exports.Poupanca = Poupanca;
