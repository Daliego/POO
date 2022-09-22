function exibir (...rest_paramenter : string[]){
    console.log(rest_paramenter);
}

function main (){
    exibir("a", "b");
    exibir("a", "b", "c");
    exibir("a", "b", "c", "d");
}

main()