import { Banco } from "./q_04/banco";

const input = require('prompt-sync')({sigint: true});
//identificador, 
//descrição, quantidade de produtos em estoque e valor unitário;

export class Produto {
    private identificador: string;
    private descricao: string;
    private qtd_produtos: number; 
    private valorUnidade: number;
    constructor(identificador: string, descricao: string, qtd_produtos: number, 
        valorUnidade: number){
        this.identificador = identificador;
        this.descricao = descricao;
        this.qtd_produtos = qtd_produtos;
        this.valorUnidade = valorUnidade;
    }
    
    repor(quantidade: number) {
        this.qtd_produtos = this.qtd_produtos + quantidade;
    }
    baixa(quantidade: number) {
        if ((this.qtd_produtos - quantidade) >= 0) {
            this.qtd_produtos = this.qtd_produtos - quantidade;
        } else {
            console.log("Quantidade de itens insuficiente");
        }
    }
    get id() {
        return this.identificador;
    }
}

export class ProdutoPerecivel extends Produto {
    private dataDeValidade: Date;
    constructor(dataDeValidade: Date, identificador: string, descricao: string, 
    qtd_produtos: number, valorUnidade: number) {
        super(identificador, descricao, qtd_produtos, valorUnidade)
        this.dataDeValidade = dataDeValidade;
    }

    eh_valido(): boolean {
        let dataAtual: Date = new Date();
        if (dataAtual.getTime() < this.dataDeValidade.getTime()) {
            return true;
        } else {
            return false;
        }
    }
    repor(quantidade: number): void {
        if (this.eh_valido()) {
            super.repor(quantidade);
        } else {
            console.log("O produto está vencido");
        }
    }
    baixa(quantidade: number): void {
        if (this.eh_valido()) {
            super.baixa(quantidade);
        } else {
            console.log("O produto esta vencido");
        }
    }
}

class Estoque {
    private produtos: Produto[];
    constructor(listaProdutos: Produto[] = []) {
        this.produtos = listaProdutos;
    }
    consultar(id: string) {
        let produtoProcurado!: Produto;
        for (let i = 0; i < this.produtos.length; i++) {
            if (id == this.produtos[i].id) {
                produtoProcurado = this.produtos[i];
                break;
            }
        }
        return produtoProcurado;
    }
    consultarIndice(id: string): number {
        let indice = -1;
        for (let i = 0; i < this.produtos.length; i++) {
            if (id == this.produtos[i].id) {
                indice = i;
                break;
            }
        }
        return indice;
    }
    consultarProdutos(): Produto[] {
        return this.produtos;
    }
    inserir(p: Produto): void {
        let produto: Produto = this.consultar(p.id);
        if (produto == undefined) {
            this.produtos.push(p);
        } else {
            console.log("ERRO: Id utilizado já utilizado");
        }
    }
    reporProdutos(id: string, quantidade: number): void {
        let produto: Produto = this.consultar(id);
        if (produto != undefined) {
            if (produto instanceof ProdutoPerecivel) {
                produto.repor(quantidade);
            } else {
                produto.repor(quantidade);
            }
        } else {
            console.log("Produto Inexistente");
        }
    }
    excluir(id: string): void {
        let indice: number = this.consultarIndice(id)
        if (indice != -1) {
            this.produtos[indice] = this.produtos[this.produtos.length - 1];
            this.produtos.pop();
        }
    }
    darBaixa(id: string, quantidade: number): void {
        let produto: Produto = this.consultar(id);
        if (produto!= undefined) {
            if (produto instanceof ProdutoPerecivel) {
                produto.baixa(quantidade);
            } else {
                produto.baixa(quantidade);
            }
        } else {
            console.log("Produto Inexistente");
        }
    }
    produtosVencidos(): void {
        let contador: number = 0;
        let vencido: boolean;
        let qtdDeVencido = 0;
        //let produtos: Produto[] = this.consultarProdutos();
        while (this.produtos.length > contador) {
            if (this.produtos[contador] instanceof ProdutoPerecivel) {
                vencido = (<ProdutoPerecivel>this.produtos[contador]).eh_valido();
                if (vencido) {
                    console.log(this.produtos[contador]);
                }
            }
            contador++;
        }
    }
    mostrarProdutos(): void {
        let contador = 0;
        while (this.produtos.length > contador) {
            console.log(this.produtos[contador]);
            contador++;
        }
    }
}
