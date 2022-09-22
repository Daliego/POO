function main (){
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const numeros_pares = array.filter(ehpar);
    console.log(numeros_pares);
}

const ehpar = (numero : number) => {return numero % 2 === 0}

main()