/* Crie uma classe Hora que tenha:
a. Três atributos privados e definidos no construtor chamados hora, minutos e
segundos;
b. Métodos públicos para ler hora, minuto e segundo de forma individual;
c. Um método público para retorne a hora no formato “hh:mm:ss”. */
class Hora{
    constructor(private hora: number, private minutos: number, private segundos: number){}
    lerHoras(){
        return this.hora;
    }
    lerinutos(){
        return this.minutos;
    }
    lerSegundos(){
        return this.segundos;
    }
    lerTodos(){
        return `${this.hora}:${this.minutos}:${this.segundos}`;
    }
}

let segundos: number, minutos: number, horas: number;
let horario : Hora = new Hora(horas = 12, minutos = 40, segundos = 20);
console.log(horario.lerHoras());
console.log(horario.lerinutos());
console.log(horario.lerSegundos());
console.log(horario.lerTodos());

/* horario.segundos;
horario.minutos;
horario.hora; */