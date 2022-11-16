import { People } from "./q_02";
import { Employee } from "./q_03";

class Professor extends Employee {
    private titration: string;
    constructor(titration: string, id: string, salary: number, name: string, lastName: string) {
        super(id, salary, name, lastName);
        this.titration = titration;
    }
    get getTitration (): string {
        return this.titration;
    }
    get primeiraParcela (): number {
        let primeiraParcela = -1;
        if (this.higherThan_0){
            primeiraParcela = this.getSalary;
            return primeiraParcela;
        } else {
            return primeiraParcela;
        }
    }
    get segundaParcela (): number {
        let segundaParcela = -1;
        if (this.higherThan_0){
            segundaParcela = 0;
            return segundaParcela;
        } else {
            return segundaParcela;
        }
    }
}

