function main() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var numeros_pares = array.filter(ehpar);
    console.log(numeros_pares);
}
var ehpar = function (numero) { return numero % 2 === 0; };
main();
