function saudacao (nome : string, tratamento : string = 'Sr'){
    //tratamento = tratamento || 'Sr';
    console.log(tratamento + '.' + ' ' + nome);

}

saudacao('nome', 'tratamento');