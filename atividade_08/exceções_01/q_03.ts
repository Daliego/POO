import { People } from "./q_02";

export class Employee extends People {
    private identification: string;
    private salary: number;
    constructor(id: string, salary: number, name: string, lastName: string) {
        super(name, lastName);
        this.identification = id;
        this.salary = salary;
    }
    get getId (): string {
        return this.identification;
    }
    get getSalary (): number {
        return this.salary;
    }
    get higherThan_0 (): boolean {
        return this.salary > 0;
    }
    get primeiraParcela (): number {
        let primeiraParcela = -1;
        if (this.higherThan_0){
            primeiraParcela = 60/100 * this.getSalary;
            return primeiraParcela;
        } else {
            return primeiraParcela;
        }
    }
    get segundaParcela (): number {
        let segundaParcela = -1;
        if (this.higherThan_0){
            segundaParcela = 40/100 * this.getSalary;
            return segundaParcela;
        } else {
            return segundaParcela;
        }
    }   
}
