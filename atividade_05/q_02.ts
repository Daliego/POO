class Postagem {
    id : number;
    texto : string;
    quantidadeCurtidas : number = 0;
    constructor (id : number, texto : string){
        this.id = id;
        this.texto = texto;
    }
    curtir() {
        this.quantidadeCurtidas++;
    }
    toString(){
        return `ID: ${this.id} \nTexto: ${this.texto} \nCurtidas: ${this.quantidadeCurtidas}`;
    }
    numero_de_curtidas(){
        return this.quantidadeCurtidas;
    }
}


class microBlog {
    array_postagens : Postagem[] = [];
    constructor (postagens : Postagem[]){
        this.array_postagens = postagens;
    }
    colocar_postagem(postagem : Postagem){
        this.array_postagens.push(postagem);
        console.log("Postagem Colocada")
    }
    consultar_indice(numero : number){
        let indice = -1;
        for (let i = 0; i < this.array_postagens.length; i++){
            if (this.array_postagens[i].id === numero){
                indice = i;
                break
            }
        }
        return indice;
    }
    excluir_postagem(id : number){
        let indice = this.consultar_indice(id);
        if (indice != -1){
            for (let i = indice; i < this.array_postagens.length; i++){
                this.array_postagens[i] = this.array_postagens[i+1];
            }
            this.array_postagens.pop();
        }
    }
    mais_curtida(){
        let maior : Postagem = this.array_postagens[1];
        for (let i = 0; i < this.array_postagens.length - 1; i++){
            if (this.array_postagens[i].numero_de_curtidas() > this.array_postagens[i+1].numero_de_curtidas()){
                maior = this.array_postagens[i];
            }else{
                maior = this.array_postagens[i+1];
            }
        }
        return maior.toString();
    }
    curtir(id : number){
        let indice = this.consultar_indice(id)
        let postagem : Postagem = this.array_postagens[this.consultar_indice(id)];
        postagem.curtir();
    }
    toString(){
        let todas_as_postagens = ''
        for (let i = 0; i < this.array_postagens.length; i++){
            todas_as_postagens += `Postagem[${i}]\n${this.array_postagens[i].toString()}\n`;
        }
        return todas_as_postagens;
    }
}

let postagem_01 : Postagem = new Postagem(1, 'Olá, mundo!');

    postagem_01.curtir();
    postagem_01.curtir();
    postagem_01.curtir();
    let postagem_02 : Postagem = new Postagem(2, 'Cachorro');
    postagem_02.curtir()
    let postagem_03 : Postagem = new Postagem(3, "Nova string");
    let blog : microBlog = new microBlog([postagem_01, postagem_02]);
    blog.colocar_postagem(postagem_03);
    blog.excluir_postagem(3);
    console.log(blog.mais_curtida() + '\n');
    blog.curtir(2);
    console.log(blog.toString());