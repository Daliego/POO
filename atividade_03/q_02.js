function eh_primo(numero) {
    for (var i = 2; i < numero / 2; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
function main() {
    console.log(eh_primo(6));
}
main();
