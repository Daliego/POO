class Triangulo {
    a : number;
    b : number;
    c : number;
    constructor(a : number,
    b : number,
    c : number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    formaTriangulo () : boolean {
        return (Math.abs(this.b - this.c) < this.a) && (this.a < this.b + this.c);
    }
    eh_equilatero (a : number, b : number, c : number) : boolean {
        if (this.formaTriangulo() === true){
            return (a === b) && (b === c);
        }else {
            return false;
        }
    }
    eh_isoceles (a : number, b : number, c : number) : boolean {
        if (this.formaTriangulo() === true){
            return (a === b) || (b === c) || (a === c);
        }else {
            return false;
        }
    }
    eh_escaleno (a : number, b : number, c : number) : boolean {
        if (this.formaTriangulo() === true){
            return (a !== b) && (b !== c) && (a !== c);
        }else {
            return false;
        }
    }
}

function main (){
    let triangulo_01 : Triangulo = new Triangulo(3, 3, 3);
    let triangulo_02 : Triangulo = new Triangulo(3, 4, 5); 
    let triangulo_03 : Triangulo = new Triangulo(3, 4, 4);

    console.log('FormaTriangulo: ' + triangulo_01.formaTriangulo(), 
    'Equilatero: ' + triangulo_01.eh_equilatero(3, 3, 3), 
    'Isóceles: ' + triangulo_01.eh_isoceles(3, 3, 3), 
    'Escaleno: ' +triangulo_01.eh_escaleno(3, 3, 3));
    
    console.log('FormaTriangulo: ' + triangulo_02.formaTriangulo(),
    'Equilatero: ' + triangulo_02.eh_equilatero(3, 4, 5), 
    'Isóceles: ' + triangulo_02.eh_isoceles(3, 4, 5));

    console.log('FormaTriangulo: ' + triangulo_03.formaTriangulo(),
    'Equilatero: ' + triangulo_03.eh_equilatero(3, 4, 4),
    'Isóceles: ' + triangulo_03.eh_isoceles(3, 4, 4));
}

main()