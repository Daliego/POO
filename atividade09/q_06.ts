abstract class Funcionario {
    protected salario: number;

    constructor(salario: number) {
        this.salario = salario;
    }

    abstract getBonificacao(): number;
}

class Gerente extends Funcionario implements Autenticavel {

    login: string = "";
    senha: string = "";

    getBonificacao(): number {
        return this.salario * 1.4;
    }

    autentica(login: string, senha: string): boolean {
        if (this.login == login && this.senha == senha) {
            return true;
        } else {
            return false;
        }
    }

}

class Diretor extends Funcionario {
    login: string = "";
    senha: string = "";
    

    getBonificacao(): number {
        return this.salario * 1.60;
    }

}

class Presidente extends Funcionario {
    getBonificacao(): number {
        return this.salario * 2.00 + 1000;
    }
}

class Cliente implements Autenticavel {
    autentica(login: string, senha: string): boolean {
        return false;
    }
    
}

public: interface Autenticavel {
    autentica(login: string, senha: string): boolean;
}



class ControleInterno {
    autentica(autenticavel: Autenticavel, login: string, senha: string): boolean {
        if (autenticavel.autentica(login, senha)) {
            return true;
        } else {
            return false;
        }
    }
 
}    
let f1: Funcionario = new Gerente(1000);
let f2: Funcionario = new Diretor(1000);

console.log(f1.getBonificacao());
console.log(f2.getBonificacao());


let ci: ControleInterno = new ControleInterno();
let gerente: Gerente = (<Gerente> f1);
gerente.login = "teste";
gerente.senha = "123";

let cliente: Cliente =new Cliente();


console.log(ci.autentica(gerente, "teste", "123"));
console.log(ci.autentica(cliente, "teste", "1234"));

//console.log(gerente instanceof Autenticavel);