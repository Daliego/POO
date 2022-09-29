
//Q_02
class Hotel_2 {
    quantReservas : number;
    adicionarReserva() : void {
        this.quantReservas++;
    }

    constructor(quantReservas : number) {
        this.quantReservas = quantReservas;
    }
}
function main() {
    let hotel : Hotel_2 = new Hotel_2(2);
    console.log(hotel.quantReservas);
}

main();