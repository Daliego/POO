import { calculadora } from "./q_02.js";
class calculadoraCientifica extends calculadora {
    exponenciar() {
        return Math.pow(this.operando1, this.operando2);
    }
}
let maquinaCalculadoraCientifica = new calculadoraCientifica(3, 2);
let resultado = maquinaCalculadoraCientifica.exponenciar();
console.log("NÚMERO EXPONENCIADO: " + resultado.toFixed(2));
//Sim, foi necessário a criação de um método para retornar os atributos que recebiam 
//os números, para que fosse possível utilizálos na classe extendida.
