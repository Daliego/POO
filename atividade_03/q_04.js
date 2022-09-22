function por_traço_em_array(array) {
    var numeros_em_string = '';
    array.forEach(function (number, index) {
        if (index != array.length - 1) {
            numeros_em_string += number + '-';
        }
        else {
            numeros_em_string += number;
        }
    });
    console.log(numeros_em_string);
}
function main() {
    var numero = [1, 2, 3, 4, 5, 6];
    por_traço_em_array(numero);
}
main();
