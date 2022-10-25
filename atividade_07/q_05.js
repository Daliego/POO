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
exports.ProdutoPerecivel = exports.Produto = void 0;
var input = require('prompt-sync')({ sigint: true });
//identificador, 
//descrição, quantidade de produtos em estoque e valor unitário;
var Produto = /** @class */ (function () {
    function Produto(identificador, descricao, qtd_produtos, valorUnidade) {
        this.identificador = identificador;
        this.descricao = descricao;
        this.qtd_produtos = qtd_produtos;
        this.valorUnidade = valorUnidade;
    }
    Produto.prototype.repor = function (quantidade) {
        this.qtd_produtos = this.qtd_produtos + quantidade;
    };
    Produto.prototype.baixa = function (quantidade) {
        if ((this.qtd_produtos - quantidade) >= 0) {
            this.qtd_produtos = this.qtd_produtos - quantidade;
        }
        else {
            console.log("Quantidade de itens insuficiente");
        }
    };
    Object.defineProperty(Produto.prototype, "id", {
        get: function () {
            return this.identificador;
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
exports.Produto = Produto;
var ProdutoPerecivel = /** @class */ (function (_super) {
    __extends(ProdutoPerecivel, _super);
    function ProdutoPerecivel(dataDeValidade, identificador, descricao, qtd_produtos, valorUnidade) {
        var _this = _super.call(this, identificador, descricao, qtd_produtos, valorUnidade) || this;
        _this.dataDeValidade = dataDeValidade;
        return _this;
    }
    ProdutoPerecivel.prototype.eh_valido = function () {
        var dataAtual = new Date();
        if (dataAtual.getTime() < this.dataDeValidade.getTime()) {
            return true;
        }
        else {
            return false;
        }
    };
    ProdutoPerecivel.prototype.repor = function (quantidade) {
        if (this.eh_valido()) {
            _super.prototype.repor.call(this, quantidade);
        }
        else {
            console.log("O produto está vencido");
        }
    };
    ProdutoPerecivel.prototype.baixa = function (quantidade) {
        if (this.eh_valido()) {
            _super.prototype.baixa.call(this, quantidade);
        }
        else {
            console.log("O produto esta vencido");
        }
    };
    return ProdutoPerecivel;
}(Produto));
exports.ProdutoPerecivel = ProdutoPerecivel;
var Estoque = /** @class */ (function () {
    function Estoque() {
        var paramenterProdutos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paramenterProdutos[_i] = arguments[_i];
        }
        this.produtos = [];
        this.produtos = paramenterProdutos;
    }
    Estoque.prototype.consultar = function (id) {
        var produtoProcurado;
        for (var i = 0; i < this.produtos.length; i++) {
            if (id == this.produtos[i].id) {
                produtoProcurado = this.produtos[i];
                break;
            }
        }
        return produtoProcurado;
    };
    Estoque.prototype.consultarIndice = function (id) {
        var indice = -1;
        for (var i = 0; i < this.produtos.length; i++) {
            if (id == this.produtos[i].id) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Estoque.prototype.consultarProdutos = function () {
        return this.produtos;
    };
    Estoque.prototype.inserir = function (p) {
        var produto = this.consultar(p.id);
        if (produto == undefined) {
            this.produtos.push(p);
        }
        else {
            console.log("ERRO: Id utilizado já utilizado");
        }
    };
    Estoque.prototype.reporProdutos = function (id, quantidade) {
        var produto = this.consultar(id);
        if (produto != undefined) {
            if (produto instanceof ProdutoPerecivel) {
                produto.repor(quantidade);
            }
            else {
                produto.repor(quantidade);
            }
        }
        else {
            console.log("Produto Inexistente");
        }
    };
    Estoque.prototype.excluir = function (id) {
        var indice = this.consultarIndice(id);
        if (indice != -1) {
            this.produtos[indice] = this.produtos[this.produtos.length - 1];
            this.produtos.pop();
        }
    };
    Estoque.prototype.darBaixa = function (id, quantidade) {
        var produto = this.consultar(id);
        if (produto != undefined) {
            if (produto instanceof ProdutoPerecivel) {
                produto.baixa(quantidade);
            }
            else {
                produto.baixa(quantidade);
            }
        }
        else {
            console.log("Produto Inexistente");
        }
    };
    Estoque.prototype.produtosVencidos = function () {
        var contador = 0;
        var vencido;
        var qtdDeVencido = 0;
        //let produtos: Produto[] = this.consultarProdutos();
        while (this.produtos.length > contador) {
            if (this.produtos[contador] instanceof ProdutoPerecivel) {
                vencido = this.produtos[contador].eh_valido();
                if (vencido) {
                    console.log(this.produtos[contador]);
                }
            }
            contador++;
        }
    };
    Estoque.prototype.mostrarProdutos = function () {
        var contador = 0;
        while (this.produtos.length > contador) {
            console.log(this.produtos[contador]);
            contador++;
        }
    };
    return Estoque;
}());
var estoque = new Estoque(new ProdutoPerecivel(new Date('2022-10-24'), '5', 'Manteiga', 2, 5.50));
var sabao = new Produto('1', 'sabão para lavar roupa', 5, 2.50);
var biscoito = new ProdutoPerecivel(new Date('2022-12-25'), '2', 'biscoito de água e sal', 10, 7.50);
var vassoura = new Produto('3', 'vassoura de palha', 2, 4.80);
var queijo = new ProdutoPerecivel(new Date('2022-10-26'), '4', 'queijo coalho', 5, 70);
estoque.inserir(sabao);
estoque.inserir(biscoito);
estoque.inserir(vassoura);
estoque.inserir(queijo);
console.log('===================================================');
estoque.mostrarProdutos();
console.log('===================================================');
estoque.mostrarProdutos();
console.log('===================================================');
estoque.darBaixa('1', 4);
estoque.darBaixa('2', 5);
estoque.darBaixa('5', 1);
estoque.reporProdutos('3', 4);
estoque.reporProdutos('4', 2);
estoque.reporProdutos('5', 2);
estoque.mostrarProdutos();
estoque.excluir('5');
console.log('===================================================');
estoque.mostrarProdutos();
console.log(estoque.consultar("01"));
console.log('===================================================');
console.log(estoque.consultar("5"));
//console.log(estoque);
