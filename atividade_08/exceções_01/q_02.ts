export class People {
    private name: string;
    private lastName: string;
    constructor(name: string, lastName: string) {
        this.name = name;
        this.lastName = lastName;
    }
    get getName (): string {
        return this.name;
    }
    get getLastName (): string {
        return this.lastName;
    }
    get nomeCompleto (): string {
        return this.getName + ' ' + this.getLastName;
    }
}

let pessoa: People = new People("Diego", "Araujo");

console.log(pessoa.nomeCompleto);
