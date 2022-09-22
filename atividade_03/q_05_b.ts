function soma(x: number, y?: any): number {
    return x + y;

}

function main (){
    console.log((soma(1, '2')));
}
main()

//Retorna a string '12', o que significa que somente ocorreu a contatenação dos valores em uma string.