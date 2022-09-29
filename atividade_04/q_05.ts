class Saudacao {
    public texto : string;
    public destinatario : string;
    constructor(texto : string, destinatario : string) { 
        this.texto = texto;
        this.destinatario = destinatario;
    }

    public obterSaudacao() : string {
        return this.texto + ", " + this.destinatario;
    }
    
}

function main (){
    let saudar : Saudacao = new Saudacao("Olá", "João");
    console.log(saudar.obterSaudacao());

}

main()